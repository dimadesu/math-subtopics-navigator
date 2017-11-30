import * as React from 'react';
import './Subtopics.css';

export class Subtopics extends React.Component {
  render() {
    return (
      <div className="subtopics">
        {this.props.children}
      </div>
    );
  }
}
