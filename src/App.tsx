import * as React from 'react';
import './App.css';

import { Header } from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="subtopics">
          <div className="subtopic">
            <div className="subtopic__title-n-completeness">
              <div className="subtopic__title">
                3. Similar Triangles
              </div>
              <div
                className="subtopic__completeness subtopic__completeness--true"
              >
                <img src="/assets/tick-big.svg" alt="Completed"/>
              </div>
            </div>
            <div className="subtopic__diagonal"/>
            <div className="subtopic__complete-button">
              <button
                type="button"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
        <div className="tabs-bar">
          <div className="tabs-bar__item tabs-bar__item--active">
            <img src="/assets/tick.svg" alt="Tick"/>
          </div>
          <div className="tabs-bar__item">
            <img src="/assets/piechart.svg" alt="Pie chart"/>
          </div>
          <div className="tabs-bar__item">
            <img src="/assets/linegraph.svg" alt="Line graph"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
