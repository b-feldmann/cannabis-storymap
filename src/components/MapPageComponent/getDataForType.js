import cannabis_2009 from './cannabis/mj_2009';
import cannabis_2010 from './cannabis/mj_2010';
import cannabis_2011 from './cannabis/mj_2011';
import cannabis_2012 from './cannabis/mj_2012';
import cannabis_2013 from './cannabis/mj_2013';
import cannabis_2014 from './cannabis/mj_2014';
import cannabis_2015 from './cannabis/mj_2015';

import incidents_2009 from './traffic/incidents_2009';
import incidents_2010 from './traffic/incidents_2010';
import incidents_2011 from './traffic/incidents_2011';
import incidents_2012 from './traffic/incidents_2012';
import incidents_2013 from './traffic/incidents_2013';
import incidents_2014 from './traffic/incidents_2014';
import incidents_2015 from './traffic/incidents_2015';

import coc_2009 from './coc/coc_2009';
import coc_2010 from './coc/coc_2010';
import coc_2011 from './coc/coc_2011';
import coc_2012 from './coc/coc_2012';
import coc_2013 from './coc/coc_2013';
import coc_2014 from './coc/coc_2014';
import coc_2015 from './coc/coc_2015';

const dict = {
  cannabis: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10}% of population consume cannabis`
    },
    2009: cannabis_2009,
    2010: cannabis_2010,
    2011: cannabis_2011,
    2012: cannabis_2012,
    2013: cannabis_2013,
    2014: cannabis_2014,
    2015: cannabis_2015,
  },
  coc: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10}% of population consume cocaine`
    },
    2009: coc_2009,
    2010: coc_2010,
    2011: coc_2011,
    2012: coc_2012,
    2013: coc_2013,
    2014: coc_2014,
    2015: coc_2015,
  },
  traffic: {
    display: (val) => {
      return `${Math.round(val * 100000) / 10} incidents per 10.000 people`
    },
    2009: incidents_2009,
    2010: incidents_2010,
    2011: incidents_2011,
    2012: incidents_2012,
    2013: incidents_2013,
    2014: incidents_2014,
    2015: incidents_2015,
  }
};

function getRange(dataList) {
  let min, max;

  dataList.forEach(data => {
    const keys = Object.keys(data);
    for (let index in keys) {
      if (keys.hasOwnProperty(index)) {
        if (min) min = Math.min(min, data[keys[index]]);
        else min = data[keys[index]];

        if (max) max = Math.max(max, data[keys[index]]);
        else max = data[keys[index]];
      }
    }
  });

  return [min, max];
};

export default function getDataForType(type, year) {
  const data = dict[type];
  const range = getRange([data[2009], data[2010], data[2011], data[2012], data[2013], data[2014], data[2015]]);
  return { range, data: data[year], display: data.display };
}