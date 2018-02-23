import React, { Component } from 'react';

import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import './styles.css'
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import SplitLayout from "../../components/SplitLayout";

import { Select } from 'antd';

const Option = Select.Option;

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
].map(obj => ({ year: obj.year, value: obj.value * 100 }));

export default class SingleStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'cannabis',
    };
  }

  handleSelect = (val) => {
    console.log(val);
    this.setState({ selected: val });
  };

  getColorado = (data) => {
    if (data.Colorado) return data.Colorado;
    return data.COLORADO;
  };

  render() {
    const chartData = [];
    chartData.push({ year: 2009, value: this.getColorado(this.props.data[this.state.selected][2009]) });
    chartData.push({ year: 2010, value: this.getColorado(this.props.data[this.state.selected][2010]) });
    chartData.push({ year: 2011, value: this.getColorado(this.props.data[this.state.selected][2011]) });
    chartData.push({ year: 2012, value: this.getColorado(this.props.data[this.state.selected][2012]) });
    chartData.push({ year: 2013, value: this.getColorado(this.props.data[this.state.selected][2013]) });
    chartData.push({ year: 2014, value: this.getColorado(this.props.data[this.state.selected][2014]) });
    chartData.push({ year: 2015, value: this.getColorado(this.props.data[this.state.selected][2015]) });

    const main = (<div>
        <Row type='flex' gutter={16}>
          <Col span={12} style={{ marginTop: 20 }}>
            <h3>
              <Select defaultValue="cannabis" onChange={this.handleSelect}>
                <Option value="cannabis">Cannabis User</Option>
                <Option value="coc">Cocaine User</Option>
                <Option value="traffic">Traffic Incidents per 10.000 people</Option>
                <Option value="mental">Mental Health Issues</Option>
                <Option value="crime">Number Of Violent Crimes</Option>
              </Select>

              in Colorado
            </h3>
            <LineChart width={800} height={400} data={chartData}
                       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="year"/>
              <YAxis/>
              <Tooltip content={this.getDisplayType(this.state.selected)}/>
              <Legend/>
              <Line type="monotone" dataKey="value" name={this.getLineDesc(this.state.selected)} stroke="#82ca9d"/>
            </LineChart>
          </Col>
        </Row>
      </div>
    );

    const side = (
      <div>
        <h1>Effect changes over time</h1>
        To better compare the changes over time for different categories, you can have a look at charts
        for individual states here. This should provide a better impression of the overall variance
        specific values have before and after the legalization of cannabis.
        <br/><br/>
        For example, you can see that the legalization of cannabis in 2012 in Colorado has had no
        significant effect on cocaine consumption. The chart for the consumption just shows generally
        high variance.
      </div>
    );

    return (
      <SplitLayout title='Effects of the Legalization of Cannabis' main={main} side={side}/>
    );
  }

  getLineDesc = (type) => {
    switch (type) {
      case "cannabis":
        return 'Percentage of Population';
      case "coc":
        return 'Percentage of Population';
      case "crime":
        return 'Number of Crimes';
      case "mental":
        return 'Percentage of Population';
      case "traffic":
        return 'Number of Traffic Incidents';
    }
  };

  getDisplayType = (type) => {
    switch (type) {
      case "cannabis":
        return (val, foo) => {
          if (!val.payload[0]) return '';
          return `${Math.round(val.payload[0].value * 1000) / 10}% of population consume cannabis`
        };
      case "coc":
        return (val) => {
          if (!val.payload[0]) return '';
          return `${Math.round(val.payload[0].value * 1000) / 10}% of population consume cocaine`
        };
      case "crime":
        return (val) => {
          if (!val.payload[0]) return '';
          return `${Math.round(val.payload[0].value * 1000) / 10} violent crimes per 100 people`
        };
      case "mental":
        return (val) => {
          if (!val.payload[0]) return '';
          return `${Math.round(val.payload[0].value * 1000) / 10}% of population with mental health issues`
        };
      case "traffic":
        return (val) => {
          if (!val.payload[0]) return '';
          return `${Math.round(val.payload[0].value * 100000) / 10} incidents per 10.000 people`
        };
    }
  };
}
