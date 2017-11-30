import * as React from 'react';
import { shallow } from 'enzyme';
import { Topic } from './Topic';

describe('Topic', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Topic
        title=""
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders topic title', () => {
    const wrapper = shallow(
      <Topic
        title="Title"
      />
    );

    expect(wrapper.find('.topic').text()).toBe('Title');
  });
});
