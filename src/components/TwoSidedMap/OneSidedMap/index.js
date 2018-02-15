import React, { Component } from 'react';
// import USAMap from "react-usa-map";

import sizeMe from 'react-sizeme'
import { colorInterpolation } from 'color-interpolator';
import { resolveState, resolveStateCode } from './stateCodes';
import './styles.css';
import USAMap from "../../USAMap";

class OneSidedMap extends Component {
  constructor(props) {
    super(props);

    if (this.props.onChangeDimension) this.props.onChangeDimension(props.size);
  }

  mapHandler = (event) => {
    if (this.props.onHover) {
      this.props.onHover(resolveStateCode(event.target.dataset.name), this.props.data);
    }
  };

  interpolate = (start, end, t) => {
    return colorInterpolation(start, end, t);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = (min, max) => {
    const config = {};
    const stateKeys = Object.keys(this.props.data);

    function normalize(val) {
      return (val - min) / (max - min);
    }

    for (let index in stateKeys) {
      if (stateKeys.hasOwnProperty(index)) {
        const code = resolveState(stateKeys[index]);
        if (this.props.colors) {
          config[code] = { fill: this.interpolate(this.props.colors[0], this.props.colors[1], normalize(this.props.data[stateKeys[index]])) };
        } else
          config[code] = { fill: this.interpolate('#FFFFFF', '#000000', normalize(this.props.data[stateKeys[index]])) };
      }
    }

    return config;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.size.width !== this.props.size.width || nextProps.size.height !== this.props.size.height) {
      if (this.props.onChangeDimension) this.props.onChangeDimension(nextProps.size);
    }
  }

  render() {
    const keys = Object.keys(this.props.data);
    let min, max;
    for (let index in keys) {
      if (keys.hasOwnProperty(index)) {
        if (min) min = Math.min(min, this.props.data[keys[index]]);
        else min = this.props.data[keys[index]];

        if (max) max = Math.max(max, this.props.data[keys[index]]);
        else max = this.props.data[keys[index]];
      }
    }

    if (this.props.min) min = this.props.min;
    if (this.props.max) max = this.props.max;

    if (this.props.startClip && this.props.endClip) {
      return (
        <div style={{
          position: 'absolute',
          clip: `rect(0,${this.props.endClip},100vh,${this.props.startClip})`,
          width: '100%'
        }}>
          <USAMap customize={this.statesCustomConfig(min, max)} onHover={this.mapHandler}/>
        </div>
      );
    }

    return (
      <div style={{ position: 'absolute', width: '100%' }}>
        <USAMap
          customize={this.statesCustomConfig(min, max)}
          onHover={this.mapHandler}/>
      </div>
    );
  }
}

export default sizeMe({ monitorHeight: true })(OneSidedMap);
