import * as React from 'react';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-group">
          <div className="menu">
            <img src="/assets/menu.svg" alt="Menu"/>
          </div>
          <div className="topic">Geometry</div>
          <div className="avatar">
            <img src="/assets/avatar.png" alt="Avatar"/>
          </div>
        </div>
        <div className="navigation">
          <div className="navigation__arrow">
            <img src="/assets/left.svg"/>
          </div>
          <div className="navigation__items">
              <div className="navigation__item navigation__item--completed">
                <a href="#" className="navigation__item__link">1</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item navigation__item--completed">
                <a href="#" className="navigation__item__link">2</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item navigation__item--completed navigation__item--active">
                <a href="#" className="navigation__item__link">3</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">4</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">5</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">6</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">7</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">8</a>
              </div>
              <div className="navigation__item-connection"/>
              <div className="navigation__item">
                <a href="#" className="navigation__item__link">9</a>
              </div>
            </div>
          <div className="navigation__arrow">
            <img src="/assets/right.svg"/>
          </div>
        </div>
      </div>
    );
  }
}
