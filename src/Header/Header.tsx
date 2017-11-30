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
        {this.props.children}
      </div>
    );
  }
}
