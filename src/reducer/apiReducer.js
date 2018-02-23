import {
  REQUEST_MJ_DATA,
  REQUEST_MENTAL_DATA,
  REQUEST_TRAFFIC_DATA,
  REQUEST_CRIME_DATA,
  REQUEST_COC_DATA
} from '../actions/actionTypes'

const INITIAL_STATE = {
  cannabis: {
    2009: require('../data/cannabis/mj_2009'),
    2010: require('../data/cannabis/mj_2010'),
    2011: require('../data/cannabis/mj_2011'),
    2012: require('../data/cannabis/mj_2012'),
    2013: require('../data/cannabis/mj_2013'),
    2014: require('../data/cannabis/mj_2014'),
    2015: require('../data/cannabis/mj_2015')
  },
  coc: {
    2009: require('../data/coc/coc_2009'),
    2010: require('../data/coc/coc_2010'),
    2011: require('../data/coc/coc_2011'),
    2012: require('../data/coc/coc_2012'),
    2013: require('../data/coc/coc_2013'),
    2014: require('../data/coc/coc_2014'),
    2015: require('../data/coc/coc_2015')
  },
  crime: {
    2009: require('../data/crime/crime_2009'),
    2010: require('../data/crime/crime_2010'),
    2011: require('../data/crime/crime_2011'),
    2012: require('../data/crime/crime_2012'),
    2013: require('../data/crime/crime_2013'),
    2014: require('../data/crime/crime_2014'),
    2015: require('../data/crime/crime_2015')
  },
  mental: {
    2009: require('../data/mental/mental_2009'),
    2010: require('../data/mental/mental_2010'),
    2011: require('../data/mental/mental_2011'),
    2012: require('../data/mental/mental_2012'),
    2013: require('../data/mental/mental_2013'),
    2014: require('../data/mental/mental_2014'),
    2015: require('../data/mental/mental_2015')
  },
  traffic: {
    2009: require('../data/traffic/incidents_2009'),
    2010: require('../data/traffic/incidents_2010'),
    2011: require('../data/traffic/incidents_2011'),
    2012: require('../data/traffic/incidents_2012'),
    2013: require('../data/traffic/incidents_2013'),
    2014: require('../data/traffic/incidents_2014'),
    2015: require('../data/traffic/incidents_2015')
  }
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