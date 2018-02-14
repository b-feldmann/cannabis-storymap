import React, { Component } from 'react';

import { Table, Icon, Divider } from 'antd';

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

export default class CannabisRiskPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Risks of consuming cannabis" align='justify'>
              Mental Disorder<br/><br/>

              Driving under influence<br/><br/>

              consumption of other drugs
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}