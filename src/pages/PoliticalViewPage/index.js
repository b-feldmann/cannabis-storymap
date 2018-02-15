import React, { Component } from 'react';

import { Avatar, Table, Icon, Divider } from 'antd';

import './styles.css'
import Card from "antd/es/card/index";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const { Meta } = Card;

export default class PoliticalViewPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="What's your opinion?" align='justify'>
            <Col span={11} offset={0}>
            <Card type="inner">
              <Meta
                avatar={<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Cdu-logo.svg" style={{width: 50}} />}
                title="CDU"
                description="This is the description"
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Die_Linke_logo.svg" style={{width: 50}} />}
                title="Die Linke"
                description="This is the description"
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Logo_der_Freien_Demokraten.svg" style={{width: 50}} />}
                title="FDP"
                description="This is the description"
              />
            </Card>
            </Col>

            <Col span={11} offset={1}>
            <Card type="inner">
              <Meta
                avatar={<img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/SPD_logo.svg" style={{width: 50}} />}
                title="SPD"
                description="This is the description"
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/B%C3%BCndnis_90_-_Die_Gr%C3%BCnen_Logo.svg" style={{width: 50}} />}
                title="Bündnis 90/Die Grüne"
                description="This is the description"
              />
            </Card>
            </Col>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}