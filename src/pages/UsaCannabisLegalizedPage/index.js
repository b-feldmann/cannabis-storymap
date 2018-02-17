import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import legalization_dates from './legalization_dates';

import Timeline from 'react-visjs-timeline';
import SplitLayout from "../../components/SplitLayout";

const options = {
  width: '100%'
};

export default class UsaCannabisLegalizedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.recreational = legalization_dates
      .filter(state => state.recreational != "not")
      .map(state => ({
        content: state.state,
        start: state.recreational
      }));

    this.state.medical = legalization_dates
      .filter(state => state.medical != "not")
      .map(state => ({
        content: state.state,
        start: state.medical
      }));
  }

  render() {
    const main = (
      <div className='center-container'>
        <div style={{width: '100%'}}>
          <h1 style={{ color: '#000', 'padding-bottom': '120px' }}>Legalization of Cannabis in the US</h1>
          <div align='center'>
            To assess the effects a cannabis legalization in Germany will have, we take a look at what changed in the US after cannabis was legalized in some states.
            <br/> <br/>
            In the US, the legalization of cannabis started in 2012 in Colorado and Washington. Hence we want to focus
            on
            these two states.
            <br/>
            Nevertheless, there are more states where cannabis is legal now. Most recent legalizations for recreational
            use took place in Vermont and California.
            <br/><br/>
            <Timeline options={options} items={this.state.recreational}/>
          </div>
        </div>
      </div>
    );

    return (
      <SplitLayout title='' main={main}/>
    );
  }
}