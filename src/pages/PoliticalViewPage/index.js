import React, { Component } from 'react';

import './styles.css'
import Card from "antd/es/card/index";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const { Meta } = Card;

export default class PoliticalViewPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="What's your opinion?" align='justify'>
            <Col span={11} offset={0}>
            <Card type="inner">
              <Meta
                avatar={<img alt="CDU/CSU" src="https://www.extremnews.com/images/full-91955be6c72c4a8bbbe1ca8cea0a29f5.png" style={{width: 50}} />}
                title="CDU/CSU"
                description="CDU and CSU do not make statements on their views to cannabis in their election program for 2017. This suggest they do not want to have any changes to the current situation."
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img alt="Die Linke" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Die_Linke_logo.svg" style={{width: 50}} />}
                title="Die Linke"
                description="Die Linke believes that it is not up to politics to morally educate. Hence they want cannabis to be legal, as alcohol and tobacco are. Die Linke wants to establish national limits for amounts of cannabis possessed. Also, non-commercial cultivation of cannabis should be legalized."
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img alt="FDP" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Logo_der_Freien_Demokraten.svg" style={{width: 50}} />}
                title="FDP"
                description="FDP wants to legalize possession and consumption of cannabis for people of legal age. They want cannabis to be sold in licensed stores which can be controlled. This way youth protection can be enforced."
              />
            </Card>
            </Col>

            <Col span={11} offset={1}>
            <Card type="inner">
              <Meta
                avatar={<img alt="SPD" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/SPD_logo.svg" style={{width: 50}} />}
                title="SPD"
                description="The SPD, like CDU and CSU, does not make any statement on their views on cannabis in their election program."
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img alt="Bündnis 90/Die Grüne" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/B%C3%BCndnis_90_-_Die_Gr%C3%BCnen_Logo.svg" style={{width: 50}} />}
                title="Bündnis 90/Die Grüne"
                description="Bündnis 90/Die Grüne is the political party which proposed the Cannabiskontrollgesetz. They want to legalize cannabis but also introduce strict regulations."
              />
            </Card>
            <Card type="inner" style={{ marginTop: 16 }}>
              <Meta
                avatar={<img alt="AfD" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Alternative-fuer-Deutschland-Logo-2013.svg" style={{width: 50}} />}
                title="AfD"
                description="AfD explicitly does not want to legalize cannabis."
              />
            </Card>
            <p style={{marginTop: 16}}>
            <a href="http://www.bento.de/nachhaltigkeit/bundestagswahl-2017-welche-parteien-wollen-cannabis-legalisieren-1664237/">Read more on this topic.</a>
            </p>
            </Col>
            
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}