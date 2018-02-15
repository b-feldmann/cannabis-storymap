import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import OneSidedMap from "../../components/TwoSidedMap/OneSidedMap";

import cannabis_info from './cannabis_info';
import { notification } from "antd/lib/index";
import SplitLayout from "../../components/SplitLayout";

export default class UsaCannabisInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  showData = (state, data) => {
    notification.destroy();
    notification.info({
      message: state,
      description: data[state]
    });
  };

  render() {
    const main = (
      <div>
        <OneSidedMap
          colors={['#FFFF00', '#FF0000']} data={cannabis_info.data.by_state} onHover={this.showData}/>
      </div>
    );

    const side = (
      <div>
        <h1>Does Legalization Imply Usage?</h1>
        <div style={{paddingLeft: 15, paddingRight: 15, paddingTop: 120}}>
        You can see on the map that the number of cannabis users is higher in Colorado, Washington, Alaska, Maine, and Vermont.
        This may be because cannabis is legal there, but remember that for example Vermont legalized cannabis only in 2018.
        Maybe it is the other way around and cannabis is legal there <b>because</b> the consumption is high - to avoid criminalizing a large share of the population.
        </div>
      </div>
    );

    return (
      <SplitLayout title='Percentage of cannabis users over the years' main={main} side={side}/>
    );
  }
}