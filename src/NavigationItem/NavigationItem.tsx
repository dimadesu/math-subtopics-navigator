import * as React from 'react';
import * as classNames from 'classnames';
import './NavigationItem.css';

export interface NavigationItemProps {
  id: number;
  completed: boolean;
}

export class NavigationItem extends React.Component<NavigationItemProps> {
  renderClassNames() {
    return classNames({
      'navigation__item': true,
      'navigation__item--completed': this.props.completed,
      'navigation__item--active': false,
    });
  }

  render() {
    return (
      <div className={this.renderClassNames()}>
        <a href="#" className="navigation__item__link">{this.props.id}</a>
      </div>
    );
  }
}
 