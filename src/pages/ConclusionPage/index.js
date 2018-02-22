import React, { Component } from 'react';

import SplitLayout from "../../components/SplitLayout";

import CarIcon from "./car.svg";
import GunIcon from "./gun.svg";
import VitaminIcon from "./vitamin.svg";
import BrainIcon from "./brain.svg";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

import "./styles.css";


export default class ConclusionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const main = (
      <div className='center-container'>
        <div style={{width: '100%'}}>
          <Row type='flex' gutter={16}>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="car icon" className="belief-icon" src={CarIcon} />
               <h1>Traffic incidents</h1>
                <i className="fa fa-arrow-up negative" />
                <span> No clear effects visible. For example, Colorado has a comparably low traffic
                      incident rate that doesn't change much with increasing marijuana consumption.
                </span>
              </div>
            </Col>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="brain icon" className="belief-icon" src={BrainIcon} />
                <h1>Mental health</h1>
                <i className="fa fa-arrow-down negative" />
                <span>
                  No clear effects visible. Looking at the early legalizations in Colorado and
                  Washington, the amount of people reporting mental health issues seem completely
                  independent of the marijuana legalization status or the amount consumed.
                </span>
              </div>
            </Col>
          </Row>
          <Row type='flex' gutter={16}>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="gun icon" className="belief-icon" src={GunIcon} />
                <h1>Crime rates</h1>
                <i className="fa fa-arrow-down positive" />
                <span>
                  No clear effects visible. In Colorado for example, the amount of violent crimes
                  hardly changed at all over the observed years.
                </span>
              </div>
            </Col>
            <Col span={10} style={{ marginTop: 20 }}>
              <div className="belief-details">
                <img alt="vitamin icon" className="belief-icon" src={VitaminIcon} />
                <h1>Cocaine usage</h1>
                <i className="fa fa-arrow-up negative" />
                <span>
                  No clear effects visible. Colorado as an example has
                  a large variance in the amount of people who reported using cocaine in the past year
                  before legalization, so we can't figure out a specific trend.
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );

      const side = (
          <div>
        <h1>Conclusion</h1>
            We only found weak to no correlations between use of cannabis and the other factors.
            Even on a single state level, there are no clear changes to detect based on the legalization
            status.
            <br/>
            This could be due to the fact that the legalization process is more of an ongoing process.
            Consumption of marijuana always changes and the legalization status has not necessarily
            the highest influence on this. In order to make more meaningful statements, more long-term data
            are needed.
            <br/> <br/>
            If you want to read more on what effects cannabis consumption has, more information can
            be found in the
            <a href="https://www.drogenbeauftragte.de/presse/pressekontakt-und-mitteilungen/2017/2017-4-quartal/aktuelle-studie-des-klinikums-der-universitaet-muenchen-cannabis-potential-und-risiken-eine-wissenschaftliche-analyse-capris.html">
            CaPRis study</a>.
      </div>
      );

    return (
      <SplitLayout title='Conclusion' main={main} side={side} />
    );
  }
}
