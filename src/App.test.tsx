import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { Topic, Subtopic } from './types';

describe('App', () => {
  const topic = {
    title: 'Geometry',
  };

  const subtopics = [
    { id: 1, title: 'Triangles', completed: true },
  ];

  it('renders without crashing', () => {
    const wrapper = shallow(
      <App
        topic={topic as Topic}
        subtopics={subtopics as Subtopic[]}
      />
    );

    expect(wrapper.length).toBe(1);
  });

});