from collections import defaultdict
from flask import Flask
import pyhdb
import socket
import json


USER = ''
PW = ''
HOST = ''


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
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response


@app.route('/state/<state>')
def get_statedata(state):
    params = {
        'state': state,
        'age_group': 4
    }

    response = {}
    response['by_state'] = by_state(params['attribute'])
    response['by_legal_status'] = avg_by_legal_status(
        params['attribute'], params['legal_status']
    )
    response['by_legal_status_timeseries'] = avg_by_legal_status_timeseries(
        params['attribute'], params['legal_status']
    )

    return prepare_view(response, params)


@app.route('/map')
def get_mapdata(outcome='MRJYR'):
    params = {
        'attribute': outcome,
        'legal_status': 'POSSESSIONRECREATIONAL',
        'year_min': 2015,
        'year_max': 2015,
        'age_group': 4
    }

    response = {}
    response['by_state'] = by_state(params['attribute'])
    response['by_legal_status'] = avg_by_legal_status(
        params['attribute'], params['legal_status']
    )
    response['by_legal_status_timeseries'] = avg_by_legal_status_timeseries(
        params['attribute'], params['legal_status']
    )

    return prepare_view(response, params)


def by_state(attribute):
    query = f'''
        SELECT s."_state" as "State", s."bsae" as "Pct"
        FROM NSDUH_STATES s
        JOIN LEGAL_STATUS_CURRENT ls
          ON s."_state" = ls.STATE
        WHERE
          /* Codeword */
          s."outcome" = '{attribute}'
          /* Filter by year */
          AND s."_year_end" >= 2015 AND s."_year_end" <= 2015
          /* TODO: Average over age groups */
          AND s."agegrp" = 4;
    '''
    results = execute_query(query)
    response = {}
    for row in results:
        response[row[0]] = row[1]
    return response


def avg_by_legal_status(attribute, legal_status):
    query = f'''
        SELECT ls."{legal_status}", AVG(s."bsae") as "Pct"
        FROM NSDUH_STATES s
        JOIN LEGAL_STATUS_CURRENT ls
          ON s."_state" = ls.STATE
        WHERE
          /* Codeword */
          s."outcome" = '{attribute}'
          /* Filter by year */
          AND s."_year_end" >= 2015 AND s."_year_end" <= 2015
          /* TODO: Average over age groups */
          AND s."agegrp" = 4
        GROUP BY ls."{legal_status}"
    '''
    results = execute_query(query)
    response = {}
    for row in results:
        response[row[0]] = row[1]
    return response


def avg_by_legal_status_timeseries(attribute, legal_status):
    query = f'''
        SELECT
          ls."{legal_status}" as "LegalStatus",
          s."_year_end",
          AVG(s."bsae") as "Pct"
        FROM NSDUH_STATES s
        JOIN LEGAL_STATUS_CURRENT ls
          ON s."_state" = ls.STATE
        WHERE
          /* Codeword */
          s."outcome" = '{attribute}'
          /* TODO: Average over age groups */
          AND s."agegrp" = 4
        GROUP BY ls."{legal_status}", s."_year_end"
        ORDER BY
          ls."{legal_status}" ASC,
          s."_year_end" ASC
    '''
    results = execute_query(query)
    response = defaultdict(dict)
    for row in results:
        response[row[0]][row[1]] = row[2]
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