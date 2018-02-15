import React, { Component } from 'react';
import './styles.css';
import Row from "antd/es/grid/row";
import { Col } from "antd/lib/grid/index";

export default class SplitLayout extends Component {
  render() {
    let hasSide = false;
    if (this.props.side) hasSide = true;

    return (
      <div className='split-layout'>
        <Row>
          <Col span={hasSide ? 17 : 24}>
            <Row><h1 className='layout-title'>{this.props.title}</h1></Row>
            <Row>
              <Col span={20} offset={2}>
                {this.props.main}
              </Col>
            </Row>
          </Col>
          <Col span={hasSide ? 6 : 0} className='left-bar'>
            <Row>
              <Col span={20} offset={2}>
                <div className='layout-side-content'>
                  {this.props.side}
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={hasSide ? 1 : 0}></Col>
        </Row>
      </div>
    );
  }
}