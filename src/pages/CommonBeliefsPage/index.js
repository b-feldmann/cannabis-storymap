import React, { Component } from 'react';

import SplitLayout from "../../components/SplitLayout";

import CarIcon from "./car.svg";
import GunIcon from "./gun.svg";
import VitaminIcon from "./vitamin.svg";
import BrainIcon from "./brain.svg";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

import "./styles.css";


export default class CommonBeliefsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const main = (
      <div style={{ width: '100%' }}>
        <Row type='flex' gutter={16}>
          <div className='center-container-no-height'>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="car icon" className="belief-icon" src={CarIcon}/>
                <h1>Traffic incidents</h1>
                <i className="fa fa-arrow-up negative"/>
                <span> Traffic incidents are expected to rise due to different driving behaviour when
                driving under the influence of cannabis.
                </span>
              </div>
            </Col>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="brain icon" className="belief-icon" src={BrainIcon}/>
                <h1>Mental health</h1>
                <i className="fa fa-arrow-down negative"/>
                <span>
                  The amount of mental health problems (like depression) is expected to rise with
                  increasing cannabis consumption.
                </span>
              </div>
            </Col>
          </div>
        </Row>
        <Row type='flex' gutter={16}>
          <div className='center-container-no-height'>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="gun icon" className="belief-icon" src={GunIcon}/>
                <h1>Crime rates</h1>
                <i className="fa fa-arrow-down positive"/>
                <span>
                  <a href="http://onlinelibrary.wiley.com/doi/10.1111/ecoj.12521/full">A study</a> suggest that the number of violent crimes actually goes down with the
                  legalization of cannabis, especially in the border states.
                </span>
              </div>
            </Col>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="vitamin icon" className="belief-icon" src={VitaminIcon}/>
                <h1>Cocaine usage</h1>
                <i className="fa fa-arrow-up negative"/>
                <span>
                  Due to the common belief that marijuana poses an entry drug into harder drugs,
                  cocaine consumption as an example of a harder drug is expected to rise.
                </span>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    );

    const side = (
      <div>
        <h1>What might be impacted?</h1>
        The <a
        href="https://www.drogenbeauftragte.de/presse/pressekontakt-und-mitteilungen/2017/2017-4-quartal/aktuelle-studie-des-klinikums-der-universitaet-muenchen-cannabis-potential-und-risiken-eine-wissenschaftliche-analyse-capris.html">CaPRis
        study</a> conducted
        by the German Federal Ministry of Health reports several effects that cannabis consumption may have.
        <br/> <br/>
        We want to pose some hypothesis based on this study and observe correlations on a state level.
      </div>
    );

    return (
      <SplitLayout title='Common beliefs' main={main} side={side}/>
    );
  }
}
