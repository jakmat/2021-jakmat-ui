import React, { Component } from 'react';
import './JmNav.scss';
import JmButton from '../../../components/JmButton/JmButton';

class JmNav extends Component {
  render() {
    return (
      <div className="JmNav">
        <JmButton caption="About"/>
        <JmButton caption="Stack"/>
        <JmButton caption="Projects"/>
      </div>
    );
  }
}

export default JmNav;
