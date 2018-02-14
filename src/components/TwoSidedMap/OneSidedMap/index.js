import React, { Component } from 'react';
// import USAMap from "react-usa-map";

import sizeMe from 'react-sizeme'
import { colorInterpolation } from 'color-interpolator';
import {resolveState, resolveStateCode} from './stateCodes';
import './styles.css';
import USAMap from "../../USAMap";

class OneSidedMap extends Component {
  mapHandler = (event) => {
    if(this.props.onHover){
      this.props.onHover(resolveStateCode(event.target.dataset.name), this.props.data);
    }
  };

  interpolate = (start, end, t) => {
    return colorInterpolation(start, end, t);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    const config = {};

    const stateKeys = Object.keys(this.props.data);

    for (let index in stateKeys) {
      if (stateKeys.hasOwnProperty(index)) {
        const code = resolveState(stateKeys[index]);
        if (this.props.colors) {
          config[code] = { fill: this.interpolate(this.props.colors[0], this.props.colors[1], this.props.data[stateKeys[index]] * 2) };
        } else
          config[code] = { fill: this.interpolate('#FFFFFF', '#000000', this.props.data[stateKeys[index]] * 2) };
      }
    }

    return config;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.size.width !== this.props.size.width) {
      if (this.props.onDimenChange) this.props.onDimenChange(nextProps.size);
    }
  }

  render() {
    if (this.props.startClip && this.props.endClip) {
      return (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          clip: `rect(0,${this.props.endClip},100vh,${this.props.startClip})`
        }}>
          <USAMap style={{ width: '100%' }}
                  customize={this.statesCustomConfig()} onHover={this.mapHandler}/>
        </div>
      );
    }

    return (
      <div>
        <USAMap style={{ width: '100%' }}
                customize={this.statesCustomConfig()}
                onHover={this.mapHandler}/>
      </div>
    );
  }
}

export default sizeMe({ monitorHeight: true })(OneSidedMap);
