import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import legalization_dates from './legalization_dates';

import Timeline from 'react-visjs-timeline';
import SplitLayout from "../../components/SplitLayout";

const options = {
  width: '100%',
  maxHeight: '300px'
};

export default class UsaCannabisLegalizedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.recreational = legalization_dates
      .filter(state => state.recreational != "not")
      .map(state => ({
        content: state.state,
        start: state.recreational
      }));

    this.state.medical = legalization_dates
      .filter(state => state.medical != "not")
      .map(state => ({
        content: state.state,
        start: state.medical
      }));
  }

  render() {
    const main = (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={24}>
            <h2>Legalization of Cannabis for Medical Purposes</h2>
            <Timeline options={options} items={this.state.medical}/>
          </Col>
        </Row>
        <Row type='flex' gutter={16}>
          <Col span={24}>
            <h2>Legalization of Cannabis for Recreational Use</h2>
            <Timeline options={options} items={this.state.recreational}/>
          </Col>
        </Row>
      </div>
    );

    return (
      <SplitLayout title='Legalization of Cannabis in the USA' main={main}/>
    );
  }
}