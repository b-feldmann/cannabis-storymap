import React, { Component } from 'react';
import './App.css';

import CannKgPage from './pages/CannKgPage';
import UsaCannabisInfoPage from './pages/UsaCannabisInfoPage';
import PoliticalViewPage from "./pages/PoliticalViewPage";
import { ScrollContainer, ScrollSection } from "./components/OnePageScroll";
import UsaCannabisLegalizedPage from "./pages/UsaCannabisLegalizedPage";
import UsaCannabisComparismPage from "./pages/UsaCannabisComparismPage";
import ConsumptionChartsPage from "./pages/ConsumptionChartsPage";
import SingleStatePage from "./pages/UsaSingleStatePage";
import CommonBeliefsPage from "./pages/CommonBeliefsPage"


class App extends Component {
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
            <UsaCannabisInfoPage/>
          </ScrollSection>

          <ScrollSection pageId={4}>
            <CommonBeliefsPage />
          </ScrollSection>

          <ScrollSection pageId={5}>
            <UsaCannabisComparismPage/>
          </ScrollSection>

          <ScrollSection pageId={6}>
            <SingleStatePage/>
          </ScrollSection>

          <ScrollSection pageId={7}>
            <PoliticalViewPage/>
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
