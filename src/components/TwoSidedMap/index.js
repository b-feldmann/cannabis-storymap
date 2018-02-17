import React, { Component } from 'react';
import './styles.css';
import OneSidedMap from "./OneSidedMap";

export default class TwoSidedMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clipPosition: 50,
      childWidth: 100,
      childHeight: 100,
    };
  }

  onChange = (value) => {
    this.setState({
      clipPosition: value,
    });
  };

  onChangeDimension = (dimen) => {
    this.setState({ childWidth: dimen.width, childHeight: dimen.height });
  };

  getRange = (data) => {
    const keys = Object.keys(data);
    let min, max;
    for (let index in keys) {
      if (keys.hasOwnProperty(index)) {
        if (min) min = Math.min(min, data[keys[index]]);
        else min = data[keys[index]];

        if (max) max = Math.max(max, data[keys[index]]);
        else max = data[keys[index]];
      }
    }

    return [min, max];
  };

  render() {
    const clipPos = `${this.state.childWidth / (100 / this.state.clipPosition)}px`;
    let leftRange = this.getRange(this.props.leftData);

    if(this.props.leftRange) leftRange = this.props.leftRange;

    return (
      <div>
        <OneSidedMap
          min={leftRange[0]} max={leftRange[1]}
          onDimenChange={this.onChangeDimension}
          onHover={this.showData}
          data={this.props.leftData} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
          endClip={clipPos}/>
      </div>
    );
  }
}