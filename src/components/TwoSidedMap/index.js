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
    return (
      <div className='two-sided-map-container'>
        <div className='two-sided-map-slider' style={{
          zIndex: 999,
          width: `${this.state.childWidth}px`,
          'margin-top': `${this.state.childHeight / 2}px`
        }}>
          <Slider min={0} max={100} value={this.state.clipPosition} onChange={this.onChange}/>
        </div>
        <OneSidedMap onDimenChange={this.onChangeDimension}
                     onHover={this.showData}
                     data={this.props.data} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
                     endClip={`${this.state.clipPosition / 2 - 0.1}vw`}/>
        <OneSidedMap onHover={this.showData}
                     data={this.props.data} colors={['#00FFFF', '#0000FF']}
                     startClip={`${this.state.clipPosition / 2 + 0.1}vw`}
                     endClip={'100vw'}/>
      </div>
    );
  }
}