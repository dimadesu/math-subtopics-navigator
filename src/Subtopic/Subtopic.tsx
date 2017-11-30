import * as React from 'react';
import * as classNames from 'classnames';
import './Subtopic.css';

export interface SubtopicModel {
  id: number;
  title: string;
  completed: boolean;
}

export interface SubtopicProps {
  id: number;
  title: string;
  completed: boolean;
  onButtonClick: (subtopicId: number) => void;
}

export class Subtopic extends React.Component<SubtopicProps> {
  renderCompletenessClassNames() {
    return classNames({
      'subtopic__completeness': true,
      'subtopic__completeness--true': this.props.completed,
    });
  }

  render() {
    return (
      <div className="subtopic">
        <div className="subtopic__title-n-completeness">
          <div className="subtopic__id-n-title">
            <span className="subtopic__id">{this.props.id}</span>
            {`. `}
            <span className="subtopic__title">{this.props.title}</span>
          </div>
          <div className={this.renderCompletenessClassNames()}>
            <img src="/assets/tick-big.svg" alt="Completed"/>
          </div>
        </div>
        <div className="subtopic__diagonal"/>
        <div className="subtopic__complete-button">
          <button
            type="button"
            onClick={() => this.props.onButtonClick(this.props.id)}
          >
            Let's Go
          </button>
        </div>
      </div>
    );
  }
}
