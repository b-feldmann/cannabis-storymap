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
].map(obj => ({year: obj.year, value: obj.value*100}));

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
          <Col span={12} style={{marginTop: 20}}>
            <h2>Cocaine consumption in Colorado</h2>
            <LineChart width={800} height={400} data={chartData}
                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type="monotone" dataKey="value" name="Percentage of Population" stroke="#82ca9d"/>
            </LineChart>
          </Col>
        </Row>
      </div>
    );

    const side = (
      <div>
        <h1>Conclusion</h1>
        <div  style={{paddingLeft: 15, paddingRight: 15, paddingTop: 80}}>
        We only found weak correlations between use of cannabis and use of other drugs, traffic incidents, mental health, and crime rates.<br/>
        In fact, Colorado, despite having one of the highest cannabis consumptions in the US, has a comparably low rate of traffic incidents.
        <br/><br/>
        The chart on the left shows, that the legalization of cannabis in 2012 in Colorado has had no significant effect on cocain consumption.
        <br/><br/>
        More information can be found in the <a href="https://www.drogenbeauftragte.de/presse/pressekontakt-und-mitteilungen/2017/2017-4-quartal/aktuelle-studie-des-klinikums-der-universitaet-muenchen-cannabis-potential-und-risiken-eine-wissenschaftliche-analyse-capris.html">CaPRis study</a>.
        </div>
      </div>
    );

    return (
      <SplitLayout title='Effects of the Legalization of Cannabis' main={main} side={side}/>
    );
  }
}