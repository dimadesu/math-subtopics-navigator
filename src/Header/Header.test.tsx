import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Header
        topic={{} as JSX.Element}
        navigation={{} as JSX.Element}
      />
    );

    expect(wrapper.length).toBe(1);
  });
});
