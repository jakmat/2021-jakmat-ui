import React, { Component } from 'react';
import './JmButton.scss';

class JmButton extends Component {
  render() {
    return (
      <div className="JmButton">
        <span>{this.props.caption}</span>
      </div>
    );
  }
}

export default JmButton;
