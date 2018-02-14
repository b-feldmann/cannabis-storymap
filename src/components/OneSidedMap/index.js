import React, { Component } from 'react';
import USAMap from "react-usa-map";

import {colorInterpolation} from 'color-interpolator';
import stateCodes from './stateCodes';
import './styles.css';

export default class OneSidedMap extends Component {

  mapHandler = (event) => {
    console.log(event.target);
    // alert(event.target.dataset.name);
  };

  interpolate = (start, end, t) => {
    return colorInterpolation(start, end, t);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    const config = {};

    const stateKeys = Object.keys(this.props.data);

    for(let index in stateKeys){
      if(stateKeys.hasOwnProperty(index)){
        const code = stateCodes(stateKeys[index]);
        config[code] = {fill: this.interpolate('#FFFFFF', '#000000', this.props.data[stateKeys[index]] * 2)};
      }
    }

    return config;
  };

  render() {
    console.log(this.props.data);
    console.log(this.interpolate('#FFFFFF', '#000000', 0));
    console.log(this.interpolate('#FFFFFF', '#000000', 0.3));
    console.log(this.interpolate('#FFFFFF', '#000000', 0.7));
    console.log(this.interpolate('#FFFFFF', '#000000', 1));

    return <div>
      <USAMap width='100%' customize={this.statesCustomConfig()}  onClick={this.mapHandler}/>
    </div>
  }
}