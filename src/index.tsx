import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { App } from './App';
import { topic, subtopics } from './data';

ReactDOM.render(
  <App
    topic={topic}
    subtopics={subtopics}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
