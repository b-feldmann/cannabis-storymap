import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";

import OneSidedMap from "../../components/TwoSidedMap/OneSidedMap";
import TwoSidedMap from "../../components/TwoSidedMap";
import Slider from "antd/es/slider/index";
import getDataForType from './getDataForType';

import { Select } from 'antd';
import SplitLayout from "../../components/SplitLayout";
import { notification } from "antd/lib/index";

const Option = Select.Option;

export default class MapPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2009,
      clipPosition: 50,
      childWidth: 100,
      childHeight: 100,
      leftSelected: 'cannabis',
      rightSelected: 'traffic',
    };
  }

  onChangeClipSlider = (value) => {
    this.setState({
      clipPosition: value,
    });
  };

  onChangeDimension = (dimen) => {
    console.log(dimen);
    this.setState({ childWidth: dimen.width, childHeight: dimen.height });
  };

  onChange = (value) => {
    this.setState({
      year: value,
    });
  };

  showData = (display, state, data) => {
    function toState(string) {
      let ret = '';
      string.split(' ').forEach((str) => {
        ret += str.charAt(0).toUpperCase() + str.toLowerCase().slice(1) + ' ';
      });
      return ret.substr(0, ret.length - 1);
    }

    const keys = Object.keys(data);
    let val = data[state];
    for(let index in keys){
      if(keys.hasOwnProperty(index)){
        if(toState(keys[index]) === state){
          val = data[keys[index]];
        }
      }
    }

    notification.destroy();
    notification.info({
      message: state,
      description: display(val)
    });
  };

  render() {
    const marks = {
      2009: '2009',
      2010: '2010',
      2011: '2011',
      2012: '2012',
      2013: '2013',
      2014: '2014',
      2015: '2015'
    };

    const leftData = getDataForType(this.state.leftSelected, this.state.year);
    const rightData = getDataForType(this.state.rightSelected, this.state.year);

    const clipPos = `${this.state.childWidth / (100 / this.state.clipPosition)}px`;

    let map;
    if (this.props.double) {
      map = (
        <div>
          <div className='two-sided-map-slider' style={{
            zIndex: 999,
            width: `${this.state.childWidth}px`,
            'margin-top': `${this.state.childHeight / 2}px`
          }}>
            <Slider min={0} max={100} value={this.state.clipPosition} onChange={this.onChangeClipSlider}/>
          </div>
          <OneSidedMap
            min={leftData.range[0]} max={leftData.range[1]}
            onChangeDimension={this.onChangeDimension}
            onHover={this.showData.bind(this, leftData.display)}
            data={leftData.data} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
            endClip={clipPos}/>
          <OneSidedMap
            min={rightData.range[0]} max={rightData.range[1]}
            onChangeDimension={this.onChangeDimension}
            onHover={this.showData.bind(this, rightData.display)}
            data={rightData.data} colors={['#00FFFF', '#0000FF']} startClip={clipPos}
            endClip={`${this.state.childWidth}px`}/>
        </div>
      );
    } else {
      map = (
        <OneSidedMap
          min={leftData.range[0]} max={leftData.range[1]}
          onHover={this.showData.bind(this, leftData.display)}
          data={leftData.data} colors={['#FFFF00', '#FF0000']}/>
      );
    }

    const main = (
      <div className='full-height'>
        <div className='map-year-slider'>
          <Slider
            value={this.state.year}
            onChange={this.onChange} marks={marks} step={null} min={2009} max={2015}
            defaultValue={2009}/>
        </div>
        {map}
      </div>
    );

    let title;
    if (this.props.double) {
      title = (
        <Row type='flex' gutter={16}>
          <Col span={6} offset={2}>
            <Select defaultValue="cannabis" onChange={this.handleLeftSelect}>
              <Option value="cannabis">Cannabis User</Option>
              <Option value="coc">Cocaine User</Option>
              <Option value="traffic">Traffic Incidents per 10.000 people</Option>
              <Option value="mental">Mental Health Issues</Option>
              <Option value="crime">Number Of Violent Crimes</Option>
            </Select>
          </Col>
          <Col span={8}>
            {this.props.title}
          </Col>
          <Col span={6}>
            <Select defaultValue="traffic" onChange={this.handleRightSelect}>
              <Option value="cannabis">Cannabis User</Option>
              <Option value="coc">Cocaine User</Option>
              <Option value="traffic">Traffic Incidents per 10.000 people</Option>
              <Option value="mental">Mental Health Issues</Option>
              <Option value="crime">Number Of Violent Crimes</Option>
            </Select>
          </Col>
        </Row>
      );
    } else {
      title = this.props.title;
    }

    return (
      <SplitLayout title={title} main={main} side={this.props.side}/>
    );
  }

  handleLeftSelect = (val) => {
    console.log(val);
    this.setState({ leftSelected: val });
  };

  handleRightSelect = (val) => {
    console.log(val);
    this.setState({ rightSelected: val });
  };
}