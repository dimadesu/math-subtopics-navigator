import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { topic, subtopics } from './data';
import { Topic, Subtopic } from './types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App
      topic={topic as Topic}
      subtopics={subtopics as Subtopic[]}
    />,
    div
  );
});
