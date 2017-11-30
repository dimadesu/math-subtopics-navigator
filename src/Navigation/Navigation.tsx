import * as React from 'react';
import './Navigation.css';

export class Navigation extends React.Component<
  {
    navigationItems: JSX.Element[];
  }
> {
  renderChildren () {
    if (this.props.navigationItems) {
      return this.props.navigationItems.reduce(
        (array, navigationItem, navigationItemIndex) => {
          array.push(navigationItem);
          if (navigationItemIndex !== (this.props.navigationItems.length - 1)) {
            array.push(
              <div
                className="navigation__item-connection"
                key={`connection-${navigationItemIndex}`}
              />
            );
          }
          return array;
        },
        [] as JSX.Element[]
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="navigation">
        <div className="navigation__arrow">
          <img src="/assets/left.svg"/>
        </div>
        <div className="navigation__items">
          {this.renderChildren()}
        </div>
        <div className="navigation__arrow">
          <img src="/assets/right.svg"/>
        </div>
      </div>
    );
  }
}
