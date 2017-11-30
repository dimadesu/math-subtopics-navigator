import * as React from 'react';
import './NavigationItem.css';

export interface NavigationItemProps {
  id: number;
}

export class NavigationItem extends React.Component<NavigationItemProps> {
  render() {
    return (
      <div className="navigation__item navigation__item--completed navigation__item--active">
        <a href="#" className="navigation__item__link">{this.props.id}</a>
      </div>
    );
  }
}
