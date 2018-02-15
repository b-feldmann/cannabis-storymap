import React, { Component } from 'react';

import './styles.css'

import { Select } from 'antd';
import MapPageComponent from "../../components/MapPageComponent";

const Option = Select.Option;

export default class UsaCannabisComparismPage extends Component {
  render() {
    const side = (
      <div>
        <h1>Does Legalization Imply Usage?</h1>
        You can see on the map that the number of cannabis users is higher in Colorado, Washington, Alaska, Maine, and
        Vermont. This may be because cannabis is legal there, but remember that for example Vermont legalized cannabis
        only in 2018. Maybe it is the other way around and cannabis is legal there <b>because</b> the consumption is
        high - to avoid criminalizing a large share of the population.
      </div>
    );

    return (
      <MapPageComponent title='Cannabis in Comparism' side={side}/>
    );
  }
}