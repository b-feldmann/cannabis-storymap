import React, { Component } from 'react';

import { Table, Icon, Divider } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './styles.css'
import Card from "antd/es/card/index";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import SplitLayout from "../../components/SplitLayout";


const chartData = [
  { "year": 2003, "value": 0.040456000715494156 },
  { "year": 2004, "value": 0.035941001027822495 },
  { "year": 2005, "value": 0.029078999534249306 },
  { "year": 2006, "value": 0.028845999389886856 },
  { "year": 2007, "value": 0.03243200108408928 },
  { "year": 2008, "value": 0.03820599988102913 },
  { "year": 2009, "value": 0.03474599868059158 },
  { "year": 2010, "value": 0.03254599869251251 },
  { "year": 2011, "value": 0.02629699930548668 },
  { "year": 2012, "value": 0.025456000119447708 },
  { "year": 2013, "value": 0.02857300080358982 },
  { "year": 2014, "value": 0.027382999658584595 },
  { "year": 2015, "value": 0.02934199944138527 }
];

const averageTimeseriesByStatus = [
  {
    "year": 2003,
    "decriminalized": 0.040456000715494156,
    "felony": 0.050456000715494156,
    "legal": 0.060456000715494156,
    "misdemeanor": 0.070456000715494156
  },
  {
    "year": 2004,
    "decriminalized": 0.045456000715494156,
    "felony": 0.02456000715494156,
    "legal": 0.050456000715494156,
    "misdemeanor": 0.04456000715494156
  },
  {
    "year": 2005,
    "decriminalized": 0.035456000715494156,
    "felony": 0.010456000715494156,
    "legal": 0.070456000715494156,
    "misdemeanor": 0.075456000715494156
  }
];

export default class SingleStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const main = (<div>
        <Row type='flex' gutter={16}>
          <Col span={12}>
            <h2>Cocaine consumption in Colorado</h2>
            <LineChart width={500} height={250} data={chartData}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="value" stroke="#82ca9d"/>
            </LineChart>
          </Col>

          <Col span={12}>
            <h2>Average by legal status</h2>
            <LineChart width={500} height={250} data={averageTimeseriesByStatus}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="legal" stroke="#00cb11"/>
              <Line type="monotone" dataKey="felony" stroke="#cb221d"/>
              <Line type="monotone" dataKey="decriminalized" stroke="#cbc98a"/>
              <Line type="monotone" dataKey="misdemeanor" stroke="#f09219"/>
            </LineChart>
          </Col>
        </Row>
      </div>
    );

    const side = (
      <div>
        <h1>I am a awesome side view</h1>
      </div>
    );

    return (
      <SplitLayout title='Legalization of Cannabis in Germany' main={main} side={side}/>
    );
  }
}