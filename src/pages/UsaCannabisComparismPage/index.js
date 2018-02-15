import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import OneSidedMap from "../../components/TwoSidedMap/OneSidedMap";

import TwoSidedMap from "../../components/TwoSidedMap";
import Slider from "antd/es/slider/index";
import cannabis_2009 from './cannabis/mj_2009';
import cannabis_2010 from './cannabis/mj_2010';
import cannabis_2011 from './cannabis/mj_2011';
import cannabis_2012 from './cannabis/mj_2012';
import cannabis_2013 from './cannabis/mj_2013';
import cannabis_2014 from './cannabis/mj_2014';
import cannabis_2015 from './cannabis/mj_2015';

import incidents_2009 from './traffic/incidents_2009';
import incidents_2010 from './traffic/incidents_2010';
import incidents_2011 from './traffic/incidents_2011';
import incidents_2012 from './traffic/incidents_2012';
import incidents_2013 from './traffic/incidents_2013';
import incidents_2014 from './traffic/incidents_2014';
import incidents_2015 from './traffic/incidents_2015';

import { Select } from 'antd';

const Option = Select.Option;

export default class UsaCannabisComparismPage extends Component {
  constructor(props) {
    super(props);

    this.state = { year: 2009 };
  }

  onChange = (value) => {
    this.setState({
      year: value,
    });
  };

  getRange = (dataList) => {
    let min, max;

    dataList.forEach(data => {
      const keys = Object.keys(data);
      for (let index in keys) {
        if (keys.hasOwnProperty(index)) {
          if (min) min = Math.min(min, data[keys[index]]);
          else min = data[keys[index]];

          if (max) max = Math.max(max, data[keys[index]]);
          else max = data[keys[index]];
        }
      }
    });

    return [min, max];
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

    let cannabis;
    let incidents;

    switch (this.state.year) {
      case(2009):
        cannabis = cannabis_2009;
        incidents = incidents_2009;
        break;
      case(2010):
        cannabis = cannabis_2010;
        incidents = incidents_2010;
        break;
      case(2011):
        cannabis = cannabis_2011;
        incidents = incidents_2011;
        break;
      case(2012):
        cannabis = cannabis_2012;
        incidents = incidents_2012;
        break;
      case(2013):
        cannabis = cannabis_2013;
        incidents = incidents_2013;
        break;
      case(2014):
        cannabis = cannabis_2014;
        incidents = incidents_2014;
        break;
      case(2015):
        cannabis = cannabis_2015;
        incidents = incidents_2015;
        break;
      default:
        cannabis = cannabis_2015;
        incidents = incidents_2015;
        break;
    }

    const leftRange = this.getRange([cannabis_2009, cannabis_2010, cannabis_2011, cannabis_2012, cannabis_2013, cannabis_2014, cannabis_2015]);
    const rightRange = this.getRange([incidents_2009, incidents_2010, incidents_2011, incidents_2012, incidents_2013, incidents_2014, incidents_2015]);

    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card className='max-height' title="Cannabis User vs Traffic Incidents" align='justify'>
              <TwoSidedMap leftData={cannabis} leftRange={leftRange} rightData={incidents} rightRange={rightRange}/>
              <Row>
                <Col span={12}>
                  <Select defaultValue="cannuser">
                    <Option value="cannuser">Cannabis User</Option>
                    <Option value="legal_status">Legalization Status</Option>
                    <Option value="traffic">Traffic Incidents</Option>
                    <Option value="mental">Mental Health Issues</Option>
                  </Select>
                </Col>
                <Col span={12}>
                  <Select defaultValue="traffic">
                    <Option value="cannuser">Cannabis User</Option>
                    <Option value="legal_status">Legalization Status</Option>
                    <Option value="traffic">Traffic Incidents</Option>
                    <Option value="mental">Mental Health Issues</Option>
                  </Select>
                </Col>
              </Row>
              <Slider style={{ position: 'absolute', bottom: '20px', width: '78vw' }} value={this.state.year}
                      onChange={this.onChange} marks={marks} step={null} min={2009} max={2015}
                      defaultValue={2009}/>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}