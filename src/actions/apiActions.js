import axios from 'axios';
import { REQUEST_MJ_DATA, REQUEST_COC_DATA, REQUEST_CRIME_DATA, REQUEST_MENTAL_DATA, REQUEST_TRAFFIC_DATA } from './actionTypes'

const API_URL = 'http://localhost:5000';

export function fetchMjData() {
  return function (dispatch, getState) {
    genRequestsForType('MJ',
      function success(data) {
        dispatch({
          type: REQUEST_MJ_DATA,
          payload: data
        });
      },
      function err(error) {
        console.log(error);
      });
  };
}

export function fetchCocData() {
  return function (dispatch, getState) {
    genRequestsForType('COC',
      function success(data) {
        dispatch({
          type: REQUEST_COC_DATA,
          payload: data
        });
      },
      function err(error) {
        console.log(error);
      });
  };
}

export function fetchCrimeData() {
  return function (dispatch, getState) {
    genRequestsForType('CRIME',
      function success(data) {
        dispatch({
          type: REQUEST_CRIME_DATA,
          payload: data
        });
      },
      function err(error) {
        console.log(error);
      });
  };
}

export function fetchMentalData() {
  return function (dispatch, getState) {
    genRequestsForType('MENTAL',
      function success(data) {
        dispatch({
          type: REQUEST_MENTAL_DATA,
          payload: data
        });
      },
      function err(error) {
        console.log(error);
      });
  };
}

export function fetchTrafficData() {
  return function (dispatch, getState) {
    genRequestsForType('TRAFFIC',
      function success(data) {
        dispatch({
          type: REQUEST_TRAFFIC_DATA,
          payload: data
        });
      },
      function err(error) {
        console.log(error);
      });
  };
}

function genRequestsForType(type, success, err) {
  axios.get(genRequestString(2009, type)).then(data2009 => {
    axios.get(genRequestString(2010, type)).then(data2010 => {
      axios.get(genRequestString(2011, type)).then(data2011 => {
        axios.get(genRequestString(2012, type)).then(data2012 => {
          axios.get(genRequestString(2013, type)).then(data2013 => {
            axios.get(genRequestString(2014, type)).then(data2014 => {
              axios.get(genRequestString(2015, type)).then(data2015 => {
                success({
                  2009: data2009.data.data,
                  2010: data2010.data.data,
                  2011: data2011.data.data,
                  2012: data2012.data.data,
                  2013: data2013.data.data,
                  2014: data2014.data.data,
                  2015: data2015.data.data
                });
              }).catch((error) => err(error));
            }).catch((error) => err(error));
          }).catch((error) => err(error));
        }).catch((error) => err(error));
      }).catch((error) => err(error));
    }).catch((error) => err(error));
  }).catch((error) => err(error));
}

function genRequestString(year, type) {
  return `${API_URL}/map/${year}/${type}`;
}
