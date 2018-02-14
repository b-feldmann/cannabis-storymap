import React, { Component } from 'react';
import USAMap from "react-usa-map";
import SplitPane from 'react-split-pane';
import './styles.css';

export default class TwoSidedMap extends Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return <div>
      <SplitPane split="vertical" primary='first'>
        <USAMap width='100%' onClick={this.mapHandler} />
        <USAMap width='100%' onClick={this.mapHandler} />
      </SplitPane>
    </div>
  }
}