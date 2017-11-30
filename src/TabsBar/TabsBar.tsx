import * as React from 'react';
import './TabsBar.css';

export class TabsBar extends React.Component {
  render() {
    return (
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
    );
  }
}
