import * as React from 'react';
import './Header.css';

export interface HeaderProps {
  topic: JSX.Element;
  navigation: JSX.Element;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <div className="header-group">
          <div className="menu">
            <img src="/assets/menu.svg" alt="Menu"/>
          </div>
          {this.props.topic}
          <div className="avatar">
            <img src="/assets/avatar.png" alt="Avatar"/>
          </div>
        </div>
        {this.props.navigation}
      </div>
    );
  }
}
