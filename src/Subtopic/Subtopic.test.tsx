import * as React from 'react';
import { shallow } from 'enzyme';
import { Subtopic } from './Subtopic';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Subtopic />
    );

    expect(wrapper.length).toBe(1);
  });
});
