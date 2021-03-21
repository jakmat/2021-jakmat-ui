import React, { Component } from 'react';
import './JmNav.scss';
import JmButton from '../../../components/JmButton/JmButton';

class JmNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonId: 'about'
    };
    this.onNavClick = props.onNavClick;
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick = (id) => {
    this.setState((state) => ({ activeButtonId: id }))
    this.onNavClick(id);
  }
  render() {
    return (
      <nav className="JmNav">
        <JmButton
          className={this.state.activeButtonId === 'about' ? 'JmButton--active' : ''}
          text="About"
          onClick={this.handleButtonClick.bind(this, 'about')}/>
        <JmButton
          className={this.state.activeButtonId === 'stack' ? 'JmButton--active' : ''}
          text="Stack"
          onClick={this.handleButtonClick.bind(this, 'stack')}/>
        <JmButton
          className={this.state.activeButtonId === 'projects' ? 'JmButton--active' : ''}
          text="Projects"
          onClick={this.handleButtonClick.bind(this, 'projects')}/>
      </nav>
    );
  }
}

export default JmNav;
