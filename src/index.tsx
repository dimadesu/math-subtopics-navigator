import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { App } from './App';
import { topic, subtopics } from './data';

// TODOL We could have some favour of Flux store for this, but for now let's keep it simple
const store = {
  topic: topic,
  subtopics: subtopics,
  activeSubtopicId: 3,
};

ReactDOM.render(
  <App
    topic={store.topic}
    subtopics={store.subtopics}
    activeSubtopicId={store.activeSubtopicId}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
