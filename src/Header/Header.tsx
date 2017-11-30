import * as React from 'react';
import './Header.css';
import { Topic } from '../types';

export interface HeaderProps {
  topic: Topic;
}

export class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <div className="header-group">
          <div className="menu">
            <img src="/assets/menu.svg" alt="Menu"/>
          </div>
          <div className="topic">{this.props.topic.title}</div>
          <div className="avatar">
            <img src="/assets/avatar.png" alt="Avatar"/>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
