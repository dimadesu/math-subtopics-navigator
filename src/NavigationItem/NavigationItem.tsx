import * as React from 'react';
import './NavigationItem.css';

export class NavigationItem extends React.Component {
  render() {
    return (
      <div className="navigation__item navigation__item--completed navigation__item--active">
        <a href="#" className="navigation__item__link">3</a>
      </div>
    );
  }
}
