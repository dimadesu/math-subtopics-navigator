import * as React from 'react';
import './App.css';
import { Topic, Subtopic } from './types';

import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { Subtopics } from './Subtopics/Subtopics';
import { TabsBar } from './TabsBar/TabsBar';

export interface AppProps {
  topic: Topic;
  subtopics: Subtopic[];
}

export interface AppState {
  activeSubtopicId: number;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: We could have some flavour of Flux store in future, but for now let's keep it simple
    this.state = {
      activeSubtopicId: 1,
    };
  }

  renderNavigationItems() {
    return this.props.subtopics.map(subtopic => (
      <NavigationItem
        key={subtopic.id}
        id={subtopic.id}
        completed={subtopic.completed}
        active={subtopic.id === this.state.activeSubtopicId}
        onClick={(subtopicId: number) => {
          this.setState({
            activeSubtopicId: subtopicId,
          });
        }}
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
