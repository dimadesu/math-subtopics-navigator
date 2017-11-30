import * as React from 'react';
import './Topic.css';

export interface TopicModel {
  title: string;
}

export class Topic extends React.Component<TopicModel> {
  render() {
    return (
      <div className="topic">{this.props.title}</div>
    );
  }
}
