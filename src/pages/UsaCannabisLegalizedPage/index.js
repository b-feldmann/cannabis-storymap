import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";


import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{ year: 2003, state: 'Alaska', dummy: 1 },{ year: 2017, state: 'FOOBAR', dummy: 1 },{ year: 2008, state: 'Colorado', dummy: 1 }];

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
  }

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Legalization of Cannabis over the years" align='justify'>
              <LineChart width={800} height={100} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis domain={[1996, 2018]} dataKey={'year'} type="number" name='Year' unit=''/>
                <Line type='monotone' dataKey='dummy' stroke='#8884d8' strokeWidth={2}/>
                <Tooltip content={<CustomTooltip/>}/>
              </LineChart>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}