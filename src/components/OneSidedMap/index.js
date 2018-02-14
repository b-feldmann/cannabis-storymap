import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './styles.css';

export default class OneSidedMap extends Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return <div>
      <USAMap width='100%' onClick={this.mapHandler}/>
    </div>
  }
}