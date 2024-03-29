import * as React from 'react';
import './App.css';

import { Header } from './Header/Header';
import { Topic, TopicModel } from './Topic/Topic';
import { Navigation } from './Navigation/Navigation';
import { NavigationItem } from './NavigationItem/NavigationItem';
import { Subtopics } from './Subtopics/Subtopics';
import { Subtopic, SubtopicModel } from './Subtopic/Subtopic';
import { TabsBar } from './TabsBar/TabsBar';

export interface AppProps {
  topic: TopicModel;
  subtopics: SubtopicModel[];
}

export interface AppState {
  activeSubtopicId: number;
  subtopics: SubtopicModel[];
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    // TODO: We could have some flavour of Flux store in future, but for now let's keep it simple
    this.state = {
      activeSubtopicId: 1,
      subtopics: props.subtopics,
    };
  }

  renderNavigationItems() {
    return this.state.subtopics.map(subtopic => (
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

  subtopicOnButtonClick = (subtopicId: number) => {
    const _newSubtopics = this.state.subtopics.map(subtopic => {
      if (subtopic.id === subtopicId) {
        const _subtopic = Object.assign({}, subtopic); // Immutable copy
        _subtopic.completed = true;
        return _subtopic;
      }
      return subtopic;
    });

    this.setState({
      subtopics: _newSubtopics,
    });
  }

  renderActiveSubtopic() {
    const activeSubtopic = this.state.subtopics.find(
      subtopic => subtopic.id === this.state.activeSubtopicId
    );

    if (activeSubtopic) {
      return (
        <Subtopic
          id={activeSubtopic.id}
          title={activeSubtopic.title}
          completed={activeSubtopic.completed}
          onButtonClick={this.subtopicOnButtonClick}
        />
      );
    } else {
      return null;
    }
    
  }

  render() {
    return (
      <div className="app">
        <Header
          topic={<Topic title={this.props.topic.title} />}
          navigation={
            <Navigation
              navigationItems={this.renderNavigationItems()}
            />
          }
        />
        <Subtopics>
          {this.renderActiveSubtopic()}
        </Subtopics>
        <TabsBar />
      </div>
    );
  }
}
