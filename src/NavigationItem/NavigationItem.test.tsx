import * as React from 'react';
import { shallow } from 'enzyme';
import { NavigationItem } from './NavigationItem';

describe('NavigationItem', () => {
  const subtopic = { id: 1, title: 'Triangles', completed: true };

  it('renders without crashing', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders subtopic id', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
      />
    );

    expect(wrapper.find('.navigation__item__link').text()).toBe(`${subtopic.id}`);
  });
});
