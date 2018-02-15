import React, { Component } from 'react';
import './styles.css';
import Row from "antd/es/grid/row";
import { Col } from "antd/lib/grid/index";

export default class SplitLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='split-layout'>
        <Row>
          <Col span={17}>
            <Row><h1 className='layout-title'>{this.props.title}</h1></Row>
            <Row>
              <Col span={20} offset={2}>
                {this.props.main}
              </Col>
            </Row>
          </Col>
          <Col span={6} className='left-bar'>
            <div className='layout-side-content'>
              {this.props.side}
            </div>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    );
  }
}