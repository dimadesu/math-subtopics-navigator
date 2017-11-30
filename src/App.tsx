import * as React from 'react';
import './App.css';

import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { Subtopics } from './Subtopics/Subtopics';
import { TabsBar } from './TabsBar/TabsBar';
import { Topic, Subtopic } from './types';

export class App extends React.Component<{
  topic: Topic;
  subtopics: Subtopic[];
}> {
  renderNavigationItems() {
    return this.props.subtopics.map(subtopic => (
      <NavigationItem
        key={subtopic.id}
        id={subtopic.id}
        completed={subtopic.completed}
        active={false}
      />
    ));
  }

  render() {
    return (
      <div className="app">
        <Header topic={this.props.topic}>
          <Navigation
            navigationItems={this.renderNavigationItems()}
          />
        </Header>
        <Subtopics />
        <TabsBar />
      </div>
    );
  }
}
