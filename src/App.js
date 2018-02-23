import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchMjData, fetchCocData, fetchCrimeData, fetchMentalData, fetchTrafficData } from './actions/apiActions';

import CannKgPage from './pages/CannKgPage';
import UsaCannabisInfoPage from './pages/UsaCannabisInfoPage';
import PoliticalViewPage from "./pages/PoliticalViewPage";
import { ScrollContainer, ScrollSection } from "./components/OnePageScroll";
import UsaCannabisLegalizedPage from "./pages/UsaCannabisLegalizedPage";
import UsaCannabisComparisonPage from "./pages/UsaCannabisComparisonPage";
import ConsumptionChartsPage from "./pages/ConsumptionChartsPage";
import SingleStatePage from "./pages/UsaSingleStatePage";
import CommonBeliefsPage from "./pages/CommonBeliefsPage";
import ConclusionPage from "./pages/ConclusionPage";


class App extends Component {
  constructor(props) {
    super(props);

    props.fetchMjData();
    props.fetchCocData();
    props.fetchCrimeData();
    props.fetchMentalData();
    props.fetchTrafficData();
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer>
          <ScrollSection pageId={0}>
            <CannKgPage/>
          </ScrollSection>

          <ScrollSection pageId={1}>
            <UsaCannabisLegalizedPage/>
          </ScrollSection>

          <ScrollSection pageId={2}>
            <ConsumptionChartsPage/>
          </ScrollSection>

          <ScrollSection pageId={3}>
            <UsaCannabisInfoPage data={this.props.api}/>
          </ScrollSection>

          <ScrollSection pageId={4}>
            <CommonBeliefsPage/>
          </ScrollSection>

          <ScrollSection pageId={5}>
            <UsaCannabisComparisonPage data={this.props.api}/>
          </ScrollSection>

          <ScrollSection pageId={6}>
            <SingleStatePage data={this.props.api}/>
          </ScrollSection>

          <ScrollSection pageId={7}>
            <ConclusionPage/>
          </ScrollSection>

          <ScrollSection pageId={8}>
            <PoliticalViewPage/>
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    api: state.api
  }
}

export default connect(mapStateToProps, {
  fetchMjData,
  fetchCocData,
  fetchCrimeData,
  fetchMentalData,
  fetchTrafficData
})(App);
