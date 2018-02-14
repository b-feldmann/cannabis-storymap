import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CannKgPage from './pages/CannKgPage';
import UsaCannabisInfoPage from './pages/UsaCannabisInfoPage';
import DrugComparisonPage from "./pages/DrugComparisonPage";
import CannabisRiskPage from "./pages/CannabisRisksPage";
import PoliticalViewPage from "./pages/PoliticalViewPage";
import { ScrollContainer, ScrollSection } from "./components/OnePageScroll";
import UsaCannabisLegalizedPage from "./pages/UsaCannabisLegalizedPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollContainer>
          <ScrollSection pageId={0}>
            <div className='full-height green-background'>
              {/*<UsaCannabisInfoPage/>*/}
              <CannKgPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={1}>
            <div className='full-height yellow-background'>
              <UsaCannabisLegalizedPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={2}>
            <div className='full-height purple-background'>
              <UsaCannabisInfoPage/>
            </div>
          </ScrollSection>


          <ScrollSection pageId={3}>
            <div className='full-height red-background'>
              <CannabisRiskPage/>
            </div>
          </ScrollSection>


          <ScrollSection pageId={4}>
            <div className='grey-background'>
              <DrugComparisonPage/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={5}>
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
