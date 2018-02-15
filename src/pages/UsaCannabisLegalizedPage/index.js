import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import legalization_dates from './legalization_dates';

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import Timeline from 'react-visjs-timeline';

const data = [{ year: 2003, state: 'Alaska', dummy: 1 },{ year: 2017, state: 'FOOBAR', dummy: 1 },{ year: 2008, state: 'Colorado', dummy: 1 }];

const options = {
  width: '100%',
  height: '60px',
  stack: false,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: 'background',
  format: {
    minorLabels: {
      minute: 'h:mma',
      hour: 'ha'
    }
  }
};

const items = [
  {id: 1, content: 'item 1', start: '2013-04-20'},
  {id: 2, content: 'item 2', start: '2013-04-14'},
  {id: 3, content: 'item 3', start: '2013-04-18'},
  {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
  {id: 5, content: 'item 5', start: '2013-04-25'},
  {id: 6, content: 'item 6', start: '2013-04-27'}
];

class CustomTooltip extends Component {
  render() {
    if(this.props.active) {
      return (
        <div className="custom-tooltip">
          {this.props.payload[0].payload.state}
        </div>
      )
    }
    return null;
  }
}

export default class UsaCannabisLegalizedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.dates = legalization_dates
      .filter(state => state.recreational != "not")
      .map(state => ({
        content: state.state,
        start: state.recreational
      }));
    console.log(this.state.dates)
  }

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Legalization of Cannabis over the years" align='justify'>
              <Timeline items={this.state.dates} />
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}