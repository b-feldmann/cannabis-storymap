import React, { Component } from 'react';

import { Table, Icon, Divider } from 'antd';

import CannCocaine from './mrj_cocaine.png';
import CannHeroine from './mrj_heroine.png';
import CannLsd from './mrj_lsd.png';
import LsdCann from './lsd_mrj.png';

import './styles.css'
import Card from "antd/es/card/index";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <p>{text}</p>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default class DrugComparisonPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Row type='flex' gutter={16}>
          <Col span={10} offset={2}>
            <Card title="Cocaine" align='justify'>
              <img className="full-img" alt="cann-cocaine" src={CannCocaine} />
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Heroine" align='justify'>
              <img className="full-img" alt="cann-heroine" src={CannHeroine}/>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
        <Row type='flex' gutter={16}>
          <Col span={10} offset={2}>
            <Card title="LSD" align='justify'>
              <img className="full-img" alt="cann-lsd" src={CannLsd} />
            </Card>
          </Col>
          <Col span={10}>
            <Card title="LSD" align='justify'>
              <img className="full-img" alt="lsd-cann" src={LsdCann}/>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}