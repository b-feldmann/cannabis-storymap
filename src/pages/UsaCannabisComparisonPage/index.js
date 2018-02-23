import React, { Component } from 'react';

import './styles.css'

import MapPageComponent from "../../components/MapPageComponent";

export default class UsaCannabisComparismPage extends Component {
  render() {
    const side = (
      <div>
        <h1>Does consumption have state-wide effects?</h1>
        You can see on the map that the number of cannabis users is higher in Colorado, Washington, Alaska, Maine, and
        Vermont. Does this imply more traffic incidents in these states? Have the people with higher cannabis usage more
        mental health problems? Or is cannabis a starter drug and more people consume other drugs with cannabis?
        <br/>
        This map show the cannabis usage of the population of the usa and compares it with other conditions.
      </div>
    );

    return (
      <MapPageComponent title='Cannabis in Comparison' side={side} double={true} data={this.props.data}/>
    );
  }
}