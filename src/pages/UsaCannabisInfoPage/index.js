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
        <h1>my headline</h1>
        hddf
        dgisdgs
        gshfgs
      </div>
    );

    return (
      <SplitLayout title='Percentage of Cannabis User over the years' main={main} side={side}/>
    );
  }
}