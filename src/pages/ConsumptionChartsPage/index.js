import React, { Component } from 'react';

import { Table, Icon, Divider } from 'antd';
import {LabelList, BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

import legalData from './data/legal.json';
import rankingData from './data/ranking.json';

import Card from "antd/es/card/index";
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
    const radius = Math.max((height/2), 0);
    const offsetX = x + width + radius * 1.5;
    const color = colors[value] || "#000";

    return (
        <g>
            <circle cx={offsetX} cy={y + radius} r={radius} fill={color} />
            <text x={offsetX} y={y + radius*1.5} fill="#fff" textAnchor="middle" dominantBaseline="right">
                {value[0].toUpperCase()}
            </text>
        </g>
    );
};

export default class ConsumptionChartsPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <Row type='flex' gutter={16}>
            <Col span={10} offset={2}>
                <Card title="2016 consumption by legal status" align='justify'>
                  <BarChart width={600} height={300} data={legalData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey="legal" />
                   <YAxis/>
                   <Tooltip/>
                   <Legend />
                   <Bar dataKey="pct" fill="#8884d8" name="Marijuana Use in the Past Year (Population percentage)" />
                  </BarChart>
                </Card>
            </Col>

            <Col span={10}>
              <Card title="Top 20 states by marijuana use in 2016" align='justify'>
                  <ul className="legend-list">
                      <li><strong>L</strong>: legal</li>
                      <li><strong>D</strong>: decriminalized</li>
                      <li><strong>M</strong>: misdemeanor</li>
                      <li><strong>F</strong>: fellony</li>
                  </ul>
              <BarChart width={500} height={600} data={rankingData.slice(0,20)} layout="vertical"
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis type="number" />
               <YAxis dataKey="state" type="category" />
               <Tooltip/>
               <Legend />
               <Bar dataKey="pct" fill="#8884d8" name="Marijuana Use in the Past Year (Population percentage)">
                   <LabelList dataKey="legalStatus" content={renderLegalizationLabel} position="right" />
               </Bar>
              </BarChart>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
