import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";


import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [{ year: 2017, state: 'Alaska' },{ year: 2003, state: 'Alaska' },{ year: 2017, state: 'FOOBAR' },{ year: 2008, state: 'Colorado' }];

export default class UsaCannabisLegalizedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Legalization of Cannabis over the years" align='justify'>
              <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis domain={[1996, 2018]} dataKey={'year'} type="number" name='Year' unit=''/>
                <YAxis dataKey={'state'} type="category" name='State' unit=''/>
                <CartesianGrid/>
                <Scatter name='A school' data={data} fill='#8884d8'/>
                <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
              </ScatterChart>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}