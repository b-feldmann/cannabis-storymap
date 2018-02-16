import React, { Component } from 'react';
import { Bar, BarChart, LabelList, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import SplitLayout from "../../components/SplitLayout";

import CarIcon from "./car.svg";
import GunIcon from "./gun.svg";
import VitaminIcon from "./vitamin.svg";
import BrainIcon from "./brain.svg";

import "./styles.css";


export default class CommonBeliefsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const main = (
      <div className='center-container'>
        <div style={{width: '100%'}}>
          <ul className="beliefs">
            <li>
              <div className="belief-details">
                <img className="belief-icon" src={CarIcon} />
                <span>Traffic incidents</span>
                <i className="fa fa-arrow-up negative" />
              </div>
            </li>
            <li>
              <img className="belief-icon" src={BrainIcon} />
              <span>Mental health</span>
              <i className="fa fa-arrow-down negative" />
            </li>
            <li>
              <img className="belief-icon" src={GunIcon} />
              <span>Crime rates</span>
              <i className="fa fa-arrow-down positive" />
            </li>
            <li>
              <img className="belief-icon" src={VitaminIcon} />
              <span>Cocaine usage</span>
              <i className="fa fa-arrow-up negative" />
            </li>
          </ul>
          </div>
        </div>
    );

      const side = (
          <div>
        <h1>What might be impacted?</h1>
            The <a href="https://www.drogenbeauftragte.de/presse/pressekontakt-und-mitteilungen/2017/2017-4-quartal/aktuelle-studie-des-klinikums-der-universitaet-muenchen-cannabis-potential-und-risiken-eine-wissenschaftliche-analyse-capris.html">CaPRis study</a> conducted by the German Federal Ministry of Health reports a negative effect on traffic incidents and mental health among others.
            <br /><br />
            <a href="http://onlinelibrary.wiley.com/doi/10.1111/ecoj.12521/full">Another study</a> suggests that decriminalization reduces violent crime.
      </div>
      );

    return (
      <SplitLayout title='Common beliefs' main={main} side={side} />
    );
  }
}
