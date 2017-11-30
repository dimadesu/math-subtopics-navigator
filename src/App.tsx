import * as React from 'react';
import './App.css';

import { Header } from './Header/Header';
import { Subtopics } from './Subtopics/Subtopics';
import { TabsBar } from './TabsBar/TabsBar';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Subtopics />
        <TabsBar />
      </div>
    );
  }
}

export default App;
