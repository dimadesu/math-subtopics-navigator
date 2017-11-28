import * as React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="header-group">
            <div className="menu">
              <img src="/assets/menu.svg" alt="Menu"/>
            </div>
            <div className="topic">Geometry</div>
            <div className="avatar">
              <img src="/assets/avatar.png" alt="Avatar"/>
            </div>
          </div>
          <div className="navigation">
            <div className="navigation__item">1</div>
            <div className="navigation__item">2</div>
            <div className="navigation__item">3</div>
          </div>
        </div>
        <div className="subtopics">
          <div className="subtopic">
            <div className="subtopic__title">
              3. Similar Triangles
            </div>
            <div
              className="subtopic__completeness subtopic__completeness--true"
            >
              <img src="/assets/tick-big.svg" alt="Completed"/>
            </div>
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
