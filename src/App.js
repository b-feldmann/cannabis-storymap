import React, { Component } from 'react';
import './App.css';

import CannKgPage from './pages/CannKgPage';
import UsaCannabisInfoPage from './pages/UsaCannabisInfoPage';
import CannabisRiskPage from "./pages/CannabisRisksPage";
import PoliticalViewPage from "./pages/PoliticalViewPage";
import { ScrollContainer, ScrollSection } from "./components/OnePageScroll";
import UsaCannabisLegalizedPage from "./pages/UsaCannabisLegalizedPage";
import UsaCannabisComparismPage from "./pages/UsaCannabisComparismPage";
import SingleStatePage from "./pages/UsaSingleStatePage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollContainer>
          <ScrollSection pageId={0}>
            {/*<SingleStatePage/>*/}
            <CannKgPage/>
          </ScrollSection>

          <ScrollSection pageId={1}>
            <UsaCannabisLegalizedPage/>
          </ScrollSection>

          <ScrollSection pageId={2}>
            <div className='full-height'>
              <UsaCannabisInfoPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={3}>
            <div className='full-height purple-background'>
              <UsaCannabisComparismPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={4}>
            <SingleStatePage/>
          </ScrollSection>

          <ScrollSection pageId={5}>
            <div className='full-height red-background'>
              <CannabisRiskPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={6}>
            <div className='full-height yellow-background'>
              <PoliticalViewPage/>
            </div>
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
