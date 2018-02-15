import React, { Component } from 'react';
import './styles.css'
import Row from "antd/es/grid/row";
import SplitLayout from "../../components/SplitLayout";

export default class CannKgPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const side = (
      <div>
        <h1>Situation in Germany</h1>
        <div style={{paddingLeft: 15, paddingRight: 15}}>
        There is a current debate on the legalization of cannabis in germany.
        The political party "Bündnis 90/Die Grüne" proposed the "Cannabiskontrollgesetz" (abbr. CannKG, cannabis
        control law)
        in order to find a proper regulation for possession, consumption and sale of cannabis products in Germany.
        <br/><br/>
        By now, cannabis is regulated by the "Betäubungsmittelgesetz" (narcotics law) which covers all illegal
        drugs,
        making cannabis equally illegal as opioids, amphetamines, and cocaine.
        <br/><br/>
        Nevertheless cannabis is widely used and tolerated in the german population.
        To avoid criminalization of large parts of the population, a separate regulation is needed. <br/>
        <br/>
        Read the <a href="https://dip21.bundestag.de/dip21/btd/18/042/1804204.pdf">
          CannKG
        </a>.
        </div>
      </div>
    );

    const main = (
        <img style={{width: "100%"}} src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Cannabis_plants_in_front_of_the_Dhaulagiri_summit.jpg"/>
      
    );

    return (
      <div>
        <SplitLayout title='Effects of Cannabis Legalization' main={main} side={side}/>
      </div>
    );
  }
}