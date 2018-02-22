import axios from 'axios';
import { REQUEST_MJ_DATA } from './actionTypes'

const API_URL = 'http://localhost:5000';

export function fetchMjData() {
  return function (dispatch, getState) {
    genRequestsForType('MJ',
      function success(data) {
        console.log(data);
        dispatch({
          type: REQUEST_MJ_DATA,
          payload: { data: data }
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
                success({ data2009, data2010, data2011, data2012, data2013, data2014, data2015 });
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
