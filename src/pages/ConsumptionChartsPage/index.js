import React, { Component } from 'react';
import { Bar, BarChart, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import legalData from './data/legal.json';
import rankingData from './data/ranking.json';
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

import "./styles.css";


const renderLegalizationLabel = (props) => {
  const colors = {
    'legal': '#00cb11',
    'felony': '#cb221d',
    'decriminalized': '#c0c0c0',
    'misdemeanor': '#f09219',
  };

  const { x, y, width, height, value } = props;
  const radius = Math.max((height / 2), 0);
  const offsetX = x + width + radius * 1.5;
  const color = colors[value] || "#000";

  return (
    <g>
      <circle cx={offsetX} cy={y + radius} r={radius} fill={color}/>
      <text x={offsetX} y={y + radius * 1.5} fill="#fff" textAnchor="middle" dominantBaseline="right">
        {value[0].toUpperCase()}
      </text>
    </g>
  );
};

export default class ConsumptionChartsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='center-container-full'>
        <div style={{ width: '100%' }}>
          <h1>Legalization Status</h1>
          <Row type='flex' gutter={16}>
            <Col span={10} offset={2} style={{ marginTop: 20 }}>
              <h2>Top 20 States by Recreational Marijuana Use in 2016</h2>
              <BarChart width={500} height={600} data={rankingData.slice(0, 20)} layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number"/>
                <YAxis dataKey="state" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="pct" fill="#98b2f6" name="Marijuana Use in the Past Year (% of Population)">
                  <LabelList dataKey="legalStatus" content={renderLegalizationLabel} position="right"/>
                </Bar>
              </BarChart>
            </Col>
            <Col span={10} style={{ marginTop: 20 }}>
              <h2>2016 Consumption by Legal Status</h2>
              <BarChart width={500} height={300} data={legalData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="legal"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="pct" fill="#98b2f6" name="Marijuana Use in the Past Year (% of Population)"/>
              </BarChart>
              <div style={{ marginTop: 50 }}>
                These charts show that the cannabis consumption is higher in states where recreational use is legal. However, this does not imply that legality causes usage. For example, in Vermont recreational use of cannabis was legalized only in 2018. However, data from 2016 already show a high cannabis consumption.
                Looking at the situation the other way around, illegality does not prevent people from using it.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
