import React, { Component } from 'react';
import './styles.css'
import Row from "antd/es/grid/row";
import SplitLayout from "../../components/SplitLayout";

export default class CannKgPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const side = (
      <div>
        <h1>FOOBAR</h1>
        this is my foo text
      </div>
    );

    const main = (
      <Row type='flex' gutter={16}>
        {/*<Col span={12} offset={2}>*/}
        <div align='justify'>
          There is a current debate on the legalization of cannabis in germany.
          The political party "Bündnis 90/Die Grüne" proposed the "Cannabiskontrollgesetz" (abbr. CannKG, cannabis
          control law)
          in order to find a proper regulation for possession, consumption and sale of cannabis products in Germany.
          By now, cannabis is regulated by the "Betäubungsmittelgesetz" (narcotics law) which covers all illegal
          drugs,
          making cannabis equally illegal as opioids, amphetamines, and cocaine.
          Nevertheless cannabis is widely used and tolerated in the german population.
          To avoid criminalization of large parts of the population, a separate regulation is needed. <br/>
          <a href="https://dip21.bundestag.de/dip21/btd/18/042/1804204.pdf">
            https://dip21.bundestag.de/dip21/btd/18/042/1804204.pdf
          </a>
        </div>
        {/*</Col>*/}
        {/*<Col span={8}>*/}
        {/*<img alt="cannkg" src={CannKgImage}/>*/}
        {/*</Col>*/}
        {/*<Col span={2}/>*/}
      </Row>
    );

    return (
      <div>
        <SplitLayout title='Legalization of Cannabis in Germany' main={main} side={side}/>
      </div>
    );
  }
}