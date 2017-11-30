import * as React from 'react';
import './Subtopic.css';

export interface SubtopicModel {
  id: number;
  title: string;
  completed: boolean;
}

export class Subtopic extends React.Component {
  render() {
    return (
      <div className="subtopic">
        <div className="subtopic__title-n-completeness">
          <div className="subtopic__title">
            3. Similar Triangles
          </div>
          <div
            className="subtopic__completeness subtopic__completeness--true"
          >
            <img src="/assets/tick-big.svg" alt="Completed"/>
          </div>
        </div>
        <div className="subtopic__diagonal"/>
        <div className="subtopic__complete-button">
          <button
            type="button"
          >
            Let's Go
          </button>
        </div>
      </div>
    );
  }
}
