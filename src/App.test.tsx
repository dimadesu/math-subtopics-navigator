import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  const store = {
    topic: {
      title: 'Geometry',
    },
    subtopics: [
      {
        id: 1,
        title: 'Triangles',
        completed: true
      },
    ],
    activeSubtopicId: 1,
  };

  it('renders without crashing', () => {
    const wrapper = shallow(
      <App
        topic={store.topic}
        subtopics={store.subtopics}
        activeSubtopicId={store.activeSubtopicId}
      />
    );

    expect(wrapper.length).toBe(1);
  });

});