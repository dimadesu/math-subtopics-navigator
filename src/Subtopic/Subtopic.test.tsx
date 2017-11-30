import * as React from 'react';
import { shallow } from 'enzyme';
import { Subtopic, SubtopicProps } from './Subtopic';

describe('Subtopic', () => {
  const subtopic = {
    id: 1,
    title: 'Title',
    completed: true,
  } as SubtopicProps;

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Subtopic
        id={subtopic.id}
        title={subtopic.title}
        completed={subtopic.completed}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders id', () => {
    const wrapper = shallow(
      <Subtopic
        id={subtopic.id}
        title={subtopic.title}
        completed={subtopic.completed}
      />
    );

    expect(wrapper.find('.subtopic__id').text()).toBe('1');
  });

  it('renders title', () => {
    const wrapper = shallow(
      <Subtopic
        id={subtopic.id}
        title={subtopic.title}
        completed={subtopic.completed}
      />
    );

    expect(wrapper.find('.subtopic__title').text()).toBe('Title');
  });

  it('renders completed class when true', () => {
    const wrapper = shallow(
      <Subtopic
        id={subtopic.id}
        title={subtopic.title}
        completed={true}
      />
    );

    expect(wrapper.find('.subtopic__completeness--true').length).toBe(1);
  });

  it('does not render completed class when false', () => {
    const wrapper = shallow(
      <Subtopic
        id={subtopic.id}
        title={subtopic.title}
        completed={false}
      />
    );

    expect(wrapper.find('.subtopic__completeness--true').length).toBe(0);
  });
});
