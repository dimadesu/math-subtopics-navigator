import * as React from 'react';
import { shallow } from 'enzyme';
import { NavigationItem } from './NavigationItem';

describe('NavigationItem', () => {
  const subtopic = {
    id: 1,
    title: 'Triangles',
    completed: true,
    active: false,
  };

  it('renders without crashing', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={subtopic.completed}
        active={subtopic.active}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders subtopic id', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={subtopic.completed}
        active={subtopic.active}
      />
    );

    expect(wrapper.find('.navigation__item__link').text()).toBe(`${subtopic.id}`);
  });

  it('renders subtopic completed class when true', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={subtopic.completed}
        active={subtopic.active}
      />
    );

    expect(wrapper.find('.navigation__item--completed').length).toBe(1);
  });

  it('does not render subtopic completed class when false', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={false}
        active={subtopic.active}
      />
    );

    expect(wrapper.find('.navigation__item--completed').length).toBe(0);
  });

  it('renders subtopic active class when true', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={subtopic.completed}
        active={true}
      />
    );

    expect(wrapper.find('.navigation__item--active').length).toBe(1);
  });

  it('does not render subtopic active class when false', () => {
    const wrapper = shallow(
      <NavigationItem
        id={subtopic.id}
        completed={subtopic.completed}
        active={false}
      />
    );

    expect(wrapper.find('.navigation__item--active').length).toBe(0);
  });
});
