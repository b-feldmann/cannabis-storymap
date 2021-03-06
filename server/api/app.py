from flask import Flask
import pyhdb
import socket
import json


USER = 'TUKGRP1'
PW = 'Initial2'
HOST = '192.168.31.57'

TARGET_MAPPING = {
    'MJ': ('NSDUH_STATES', 'MRJYR'),
    'COC': ('NSDUH_STATES', 'COCYR'),
    'TRAFFIC': ('TRAFFIC_NORMALIZED', 'INCIDENTS_NORM'),
    'LEGAL': ('LEGAL_STATUS_CURRENT', 'POSSESSIONRECREATIONAL'),
    'MENTAL': ('NSDUH_STATES', 'AMIYR'),
    'CRIME': ('CRIME_CLEAN', 'VIOLENT_CRIME_PER_PERSON')
}


class HanaConnection(object):
    def __init__(self):
        try:
            self.connection = pyhdb.connect(
                host=HOST,
                port=30015,
                user=USER,
                password=PW,
                autocommit=True
            )
            self.cursor = self.connection.cursor()
        except socket.gaierror as e:
            print('Database instance is not available! \n\n')
            raise e

    def __enter__(self):
        return self.cursor

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is not None:
            print(exc_type, exc_value, traceback)
        self.cursor.close()
        self.connection.close()


app = Flask(__name__)


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


@app.route('/state/<state>/<target>')
def get_statedata(state, target):
    params = {
        'state': state,
        'target': target,
        'age_group': 4
    }

    response = outcome_years_for_state(params['state'], params['target'],
                                       params['age_group'])
    return prepare_view(response, params)


@app.route('/legal/<legalstatus>/<target>')
def get_legaldata(legalstatus, target):
    params = {
        'target': target,
        'legalstatus': legalstatus,
        'age_group': 4
    }

    response = avg_by_legal_status_timeseries(
        params['target'], params['legalstatus'], params['age_group']
    )

    return prepare_view(response, params)


@app.route('/map/<year>/<target>')
def get_mapdata(year, target):
    params = {
        'target': target,
        'year': year,
        'age_group': 4
    }

    response = outcome_states_for_year(params['year'], params['target'],
                                       params['age_group'])
    return prepare_view(response, params)


def outcome_years_for_state(state, target, agegrp):
    schema, outcome = TARGET_MAPPING[target]
    if schema == 'TRAFFIC_NORMALIZED' or schema == 'CRIME_CLEAN':
        query = '''SELECT "State", {} as "Value", YEAR as "Year"
                   FROM "TUKGRP1".{}
                   WHERE UPPER("State") = UPPER(\'{}\')'''.format(outcome,
                                                                  schema,
                                                                  state)
    else:
        query = '''
            SELECT s."_state" as "State", s."bsae" as "Value",
                   s."_year_end" as "Year"
            FROM {} s
            WHERE
              /* Codeword */
              s."outcome" = \'{}\'
              AND s."_state" = \'{}\'
              AND s."agegrp" = {};
        '''.format(schema, outcome, state, agegrp)
    results = execute_query(query)
    response = {}
    for row in results:
        response[row[2]] = float(row[1])
    return response


def outcome_states_for_year(year, target, agegrp):
    schema, outcome = TARGET_MAPPING[target]
    if schema == 'TRAFFIC_NORMALIZED' or schema == 'CRIME_CLEAN':
        query = '''SELECT "State", {} as "Value", YEAR as "Year"
                   FROM "TUKGRP1".{}
                   WHERE "YEAR" = {}'''.format(outcome, schema, year)
    elif schema == 'LEGAL_STATUS_CURRENT':
        query = '''SELECT STATE,
        (CASE
        WHEN {0}='felony' THEN 0
        WHEN {0}='midemeanor' THEN 1
        WHEN {0}='decriminalized' THEN 2
        ELSE 3
        END)
        FROM "TUKGRP1"."{1}"
        '''.format(outcome, schema)
    else:
        query = '''
            SELECT s."_state" as "State", s."bsae" as "Value",
                   s."_year_end" as "Year"
            FROM {} s
            WHERE
              /* Codeword */
              s."outcome" = \'{}\'
              AND s."_year_end" = \'{}\'
              AND s."agegrp" = {};
        '''.format(schema, outcome, year, agegrp)
    results = execute_query(query)
    response = {}
    for row in results:
        response[row[0]] = float(row[1])
    return response


def avg_by_legal_status_timeseries(target, legal_status, agegrp):
    schema, outcome = TARGET_MAPPING[target]
    if schema == 'TRAFFIC_NORMALIZED':
        query = '''
            SELECT
              ls."{0}" as "LegalStatus",
              s.YEAR as "Year",
              AVG({1}) as "Value"
            FROM {2} s
            JOIN LEGAL_STATUS_CURRENT ls
              ON UPPER(s."State") = UPPER(ls.STATE)
            GROUP BY ls."{0}", s.YEAR
            ORDER BY s.YEAR ASC,
            ls."{0}" ASC
        '''.format(legal_status, outcome, schema)
    else:
        query = '''
            SELECT
              ls."{0}" as "LegalStatus",
              s."_year_end" as "Year",
              AVG(s."bsae") as "Value"
            FROM {1} s
            JOIN LEGAL_STATUS_CURRENT ls
              ON s."_state" = ls.STATE
            WHERE
              /* Codeword */
              s."outcome" = '{2}'
              AND s."agegrp" = {3}
            GROUP BY ls."{0}", s."_year_end"
            ORDER BY
              s."_year_end" ASC,
              ls."{0}" ASC
    '''.format(legal_status, schema, outcome, agegrp)
    results = execute_query(query)
    response = []
    elem = {}
    cur_year = 0
    for row in results:
        if int(row[1]) > cur_year:
            if elem:
                response.append(elem)
            cur_year = int(row[1])
            elem = {'year': cur_year}
        elem[row[0]] = float(row[2])
    return response


def execute_query(query):
    print(query)
    result = []
    with HanaConnection() as conn:
        try:
            conn.execute(query)
            return conn.fetchall()
        except Exception as e:
            print(e)
    return result


def prepare_view(data, query_params={}):
    return json.dumps({
        'data': data,
        'query': query_params
    })


if __name__ == '__main__':
    app.run()
