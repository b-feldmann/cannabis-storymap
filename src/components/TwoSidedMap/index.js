import React, { Component } from 'react';
import './styles.css';
import OneSidedMap from "./OneSidedMap";
import { Slider, notification } from 'antd';

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

  showData = (state, data) => {
    notification.destroy();
    notification.info({
      message: state,
      description: data[state]
    });
  };

  render() {
    const clipPos = `${this.state.childWidth / (100 / this.state.clipPosition)}px`;

    return (
      <div className='two-sided-map-container'>
        <div className='two-sided-map-slider' style={{
          zIndex: 999,
          width: `${this.state.childWidth}px`,
          'margin-top': `${this.state.childHeight / 2}px`
        }}>
          <Slider min={0} max={100} value={this.state.clipPosition} onChange={this.onChange}/>
        </div>
        <OneSidedMap dataMul={4}
          onDimenChange={this.onChangeDimension}
                     onHover={this.showData}
                     data={this.props.leftData} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
                     endClip={clipPos}/>
        <OneSidedMap dataMul={1000}
          onHover={this.showData}
                     data={this.props.rightData} colors={['#00FFFF', '#0000FF']}
                     startClip={clipPos}
                     endClip={`${this.state.childWidth}px`}/>
      </div>
    );
  }
}