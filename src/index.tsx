import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { App } from './App';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { Subtopics } from './Subtopics/Subtopics';
import { TabsBar } from './TabsBar/TabsBar';

ReactDOM.render(
  <App>
    <Header>
      <Navigation
        navigationItems={[
          <NavigationItem key={0}/>,
          <NavigationItem key={1}/>,
          <NavigationItem key={2}/>,
        ]}
      />
    </Header>
    <Subtopics />
    <TabsBar />
  </App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
