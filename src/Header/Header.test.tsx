import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  const topic = {
    title: 'Title',
  };

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Header topic={topic} />
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders topic title', () => {
    const wrapper = shallow(
      <Header topic={topic} />
    );

    expect(wrapper.find('.topic').text()).toBe('Title');
  });
});
