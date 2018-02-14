import React, { Component } from 'react';
import CannKgImage from './cannkg.jpg';
import './styles.css'

import Card from "antd/es/card/index";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Meta from "antd/es/card/Meta";

export default class CannKgPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={12} offset={2}>
            <Card title="Cannabis Kontrollgesetz" align='justify'>
              something about the cannkg
              don't know - just some text
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img alt="cannkg" src={CannKgImage}/>}/>
          </Col>
          <Col span={2}/>
        </Row>

        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Comparism with USA" align='justify'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}