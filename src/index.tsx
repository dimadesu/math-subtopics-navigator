import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { App } from './App';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Subtopics } from './Subtopics/Subtopics';
import { TabsBar } from './TabsBar/TabsBar';

ReactDOM.render(
  <App>
    <Header>
      <Navigation />
    </Header>
    <Subtopics />
    <TabsBar />
  </App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
