import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import OneSidedMap from "../../components/TwoSidedMap/OneSidedMap";

import TwoSidedMap from "../../components/TwoSidedMap";
import Slider from "antd/es/slider/index";
import cannabis_2009 from './cannabis/mj_2009';
import cannabis_2010 from './cannabis/mj_2010';
import cannabis_2011 from './cannabis/mj_2011';
import cannabis_2012 from './cannabis/mj_2012';
import cannabis_2013 from './cannabis/mj_2013';
import cannabis_2014 from './cannabis/mj_2014';
import cannabis_2015 from './cannabis/mj_2015';

import incidents_2009 from './traffic/incidents_2009';
import incidents_2010 from './traffic/incidents_2010';
import incidents_2011 from './traffic/incidents_2011';
import incidents_2012 from './traffic/incidents_2012';
import incidents_2013 from './traffic/incidents_2013';
import incidents_2014 from './traffic/incidents_2014';
import incidents_2015 from './traffic/incidents_2015';

import { Select } from 'antd';
import SplitLayout from "../../components/SplitLayout";
import MapPageComponent from "../../components/MapPageComponent";

const Option = Select.Option;

export default class UsaCannabisComparismPage extends Component {
  render() {
    const side = (
      <div>
        <h1>my fancy headline</h1>
        fds<br/>
        sdg sh<br/>
        hf
      </div>
    );

    return (
      <MapPageComponent title='Cannabis in Comparism' side={side}/>
    );
  }
}