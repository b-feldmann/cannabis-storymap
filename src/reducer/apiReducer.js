import {
  REQUEST_MJ_DATA,
  REQUEST_MENTAL_DATA,
  REQUEST_TRAFFIC_DATA,
  REQUEST_CRIME_DATA,
  REQUEST_COC_DATA
} from '../actions/actionTypes'

const INITIAL_STATE = {
  cannabis: { 2009: {}, 2010: {}, 2011: {}, 2012: {}, 2013: {}, 2014: {}, 2015: {} },
  coc: { 2009: {}, 2010: {}, 2011: {}, 2012: {}, 2013: {}, 2014: {}, 2015: {} },
  crime: { 2009: {}, 2010: {}, 2011: {}, 2012: {}, 2013: {}, 2014: {}, 2015: {} },
  mental: { 2009: {}, 2010: {}, 2011: {}, 2012: {}, 2013: {}, 2014: {}, 2015: {} },
  traffic: { 2009: {}, 2010: {}, 2011: {}, 2012: {}, 2013: {}, 2014: {}, 2015: {} }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_MJ_DATA:
      return { ...state, cannabis: action.payload };
    case REQUEST_COC_DATA:
      return { ...state, coc: action.payload };
    case REQUEST_CRIME_DATA:
      return { ...state, crime: action.payload };
    case REQUEST_MENTAL_DATA:
      return { ...state, mental: action.payload };
    case REQUEST_TRAFFIC_DATA:
      return { ...state, traffic: action.payload };
    default:
      return state;
  }
}