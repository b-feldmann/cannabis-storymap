import React, { Component } from 'react';

import { Table, Icon, Divider } from 'antd';

import './styles.css'
import MentalHealthImage from './charts/mentalhlth.png';
import Card from "antd/es/card/index";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const consumptionGroupsData = [{
  key: '0',
  name: '0',
  minDays: '',
  maxDays: 0
}, {
  key: '1',
  name: '1',
  minDays: 1,
  maxDays: 5
}, {
  key: '2',
  name: '2',
  minDays: 6,
  maxDays: 10
}, {
  key: '3',
  name: '3',
  minDays: 10,
  maxDays: 20
}, {
  key: '3',
  name: '3',
  minDays: 21,
  maxDays: 30
}];

const consumptionGroupColumns = [{
  title: 'Consumption',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Days/month (min)',
  dataIndex: 'minDays',
  key: 'minDays',
}, {
  title: 'Days/month (max)',
  dataIndex: 'maxDays',
  key: 'maxDays',
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
          <Col span={10} offset={2}>
            <Card title="Marijuana consumers vs. non-consumers" align='justify'>
              <ul className="brfss-questionnaire">
                <li>Thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days during the past 30 days was your mental health not good?</li>
                <li>During the past 30 days, for about how many days did poor physical or mental health keep you from doing your usual activities, such as self-care, work, or recreation?</li>
                <li>On average, how many hours of sleep do you get in a 24-hour period?</li>
                <li>Were you ever told that you have Chronic Obstructive Pulmonary Disease (COPD), emphysema or chronic bronchitis?</li>
                <li>Were you ever told that you have a depressive disorder, including depression, major depression, dysthymia, or minor depression?</li>
                <li>Because of a physical, mental, or emotional condition, do you have serious difficulty concentrating, remembering, or making decisions?</li>
                <li>What's your annual household income from all sources?</li>
                <li>What is the highest grade or year of school you completed?</li>
                <li>What's your employment status?</li>
              </ul>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Days of mental health issues" align='justify'>
              <div className="question-details">
                <img className="full-img" src={MentalHealthImage} />
                <p>On average, Marijuana consumers report <strong>twice</strong> as many days with mental health issues compared to non-consumers.</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}