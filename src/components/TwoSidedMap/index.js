import React, { Component } from 'react';
import './styles.css';
import OneSidedMap from "./OneSidedMap";
import { Slider } from 'antd';

export default class TwoSidedMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clipPosition: 50,
      childWidth: 100,
      childHeight: 100,
    };
  }

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  onChange = (value) => {
    this.setState({
      clipPosition: value,
    });
  };

  onChangeDimension = (dimen) => {
    this.setState({ childWidth: dimen.width, childHeight: dimen.height });
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
                     data={this.props.data} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
                     endClip={`${this.state.clipPosition / 2}vw`}/>
        <OneSidedMap data={this.props.data} colors={['#00FFFF', '#0000FF']}
                     startClip={`${this.state.clipPosition / 2}vw`}
                     endClip={'100vw'}/>
      </div>
    );
  }
}