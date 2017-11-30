import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('App', () => {
  const data = {
    topic: {
      title: 'Geometry',
    },
    subtopics: [
      {
        id: 1,
        title: 'Triangles',
        completed: true
      },
      {
        id: 2,
        title: 'Circles',
        completed: true
      },
    ],
  };

  it('renders without crashing', () => {
    const wrapper = shallow(
      <App
        topic={data.topic}
        subtopics={data.subtopics}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('given active nav item is id 1, on click of nav item with id 2 it becomes active', () => {
    const wrapper = mount(
      <App
        topic={data.topic}
        subtopics={data.subtopics}
      />
    );

    expect(wrapper.find('#navigation__item__id-1.navigation__item--active').length).toBe(1);
    expect(wrapper.find('#navigation__item__id-2.navigation__item--active').length).toBe(0);

    wrapper.find('#navigation__item__id-2 .navigation__item__link').simulate('click');
    
    expect(wrapper.find('#navigation__item__id-1.navigation__item--active').length).toBe(0);
    expect(wrapper.find('#navigation__item__id-2.navigation__item--active').length).toBe(1);
  });

});