import React from "react";
import data from "./data/usa-map-dimensions";
import USAState from "./USAState";

class USAMap extends React.Component {

  clickHandler = (stateAbbreviation) => {
    this.props.onClick(stateAbbreviation);
  };

  hoverHandler = (stateAbbreviation) => {
    if (this.props.onHover) this.props.onHover(stateAbbreviation);
  };

  fillStateColor = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].fill) {
      return this.props.customize[state].fill;
    }

    return this.props.defaultFill;
  };

  stateClickHandler = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].clickHandler) {
      return this.props.customize[state].clickHandler
    }
    return this.clickHandler;
  };

  stateHoverHandler = (state) => {
    if (this.props.customize && this.props.customize[state] && this.props.customize[state].hoverHandler) {
      return this.props.customize[state].hoverHandler
    }
    return this.hoverHandler;
  };

  buildPaths = () => {
    let paths = [];
    for (let stateKey in data) {
      const path = <USAState key={stateKey} dimensions={data[stateKey]["dimensions"]} state={stateKey}
                             fill={this.fillStateColor(stateKey)}
                             onClickState={this.stateClickHandler(stateKey)}
                             onHoverState={this.stateHoverHandler(stateKey)}/>
      paths.push(path);
    }
    ;
    return paths;
  };

  render() {
    return (
      <svg className="us-state-map" xmlns="http://www.w3.org/2000/svg" width={this.props.width}
           height={this.props.height} viewBox="0 0 959 593">
        <g className="outlines">
          {this.buildPaths()}
        </g>
      </svg>
    );
  }
}

USAMap.defaultProps = {
  onClick: () => {
  },
  width: 959,
  height: 593,
  defaultFill: "#D3D3D3",
  customize: {}
};

export default USAMap;