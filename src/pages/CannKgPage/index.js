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
            <Card title="Legalization of Cannabis in Germany" align='justify'>
              There is a current debate on the legalization of cannabis in germany.
              The political party "Bündnis 90/Die Grüne" proposed the "Cannabiskontrollgesetz" (abbr. CannKG, cannabis control law)
              in order to find a proper regulation for possession, consumption and sale of cannabis products in Germany.
              By now, cannabis is regulated by the "Betäubungsmittelgesetz" (narcotics law) which covers all illegal drugs,
              making cannabis equally illegal as opioids, amphetamines, and cocaine.
              Nevertheless cannabis is widely used and tolerated in the german population.
              To avoid criminalization of large parts of the population, a separate regulation is needed. <br/>
              <a href="https://dip21.bundestag.de/dip21/btd/18/042/1804204.pdf">https://dip21.bundestag.de/dip21/btd/18/042/1804204.pdf</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card cover={<img alt="cannkg" src={CannKgImage}/>}/>
          </Col>
          <Col span={2}/>
        </Row>

        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Contents of the CannKG" align='justify'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Card>
          </Col>
          <Col span={2}/>
        </Row>

        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Comparison with the USA" align='justify'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}