const displayType = {
  cannabis: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10}% of population consume cannabis`
    }
  },
  coc: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10}% of population consume cocaine`
    }
  },
  crime: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10} violent crimes per 100 people`
    }
  },
  mental: {
    display: (val) => {
      return `${Math.round(val * 1000) / 10}% of population with mental health issues`
    }
  },
  traffic: {
    display: (val) => {
      return `${Math.round(val * 100000) / 10} incidents per 10.000 people`
    }
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

export default function getDataForType(dataDict, type, year) {
  const data = dataDict[type];
  const range = getRange([data[2009], data[2010], data[2011], data[2012], data[2013], data[2014], data[2015]]);
  return { range, data: data[year], display: displayType[type].display };

}