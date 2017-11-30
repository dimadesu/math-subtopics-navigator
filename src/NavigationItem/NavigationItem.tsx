import * as React from 'react';
import * as classNames from 'classnames';
import './NavigationItem.css';

export interface NavigationItemProps {
  id: number;
  completed: boolean;
  active: boolean;
  onClick: (subtopicId: number) => void;
}

export class NavigationItem extends React.Component<NavigationItemProps> {
  renderClassNames() {
    return classNames({
      'navigation__item': true,
      'navigation__item--completed': this.props.completed,
      'navigation__item--active': this.props.active,
    });
  }

  render() {
    return (
      <div
        className={this.renderClassNames()}
        id={`navigation__item__id-${this.props.id}`}
      >
        <a
          onClick={() => this.props.onClick(this.props.id)}
          className="navigation__item__link"
        >
            {this.props.id}
        </a>
      </div>
    );
  }
}
 