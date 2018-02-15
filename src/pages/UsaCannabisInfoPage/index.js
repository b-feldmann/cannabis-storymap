import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import OneSidedMap from "../../components/TwoSidedMap/OneSidedMap";

import cannabis_info from './cannabis_info';
import { notification } from "antd/lib/index";

export default class UsaCannabisInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  showData = (state, data) => {
    notification.destroy();
    notification.info({
      message: state,
      description: data[state]
    });
  };

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card className='max-height' title="Percentage of Cannabis User 2015" align='justify'>
              <OneSidedMap
                colors={['#FFFF00', '#FF0000']} dataMul={4} data={cannabis_info.data.by_state} onHover={this.showData}/>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}