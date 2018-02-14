import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './styles.css';

export default class TwoSidedMap extends Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    const style = {
      position: 'relative',
      width: '80%',
      height: '60%'
    };

    return <div>
      <USAMap width='100%' onClick={this.mapHandler} />
    </div>
  }
}