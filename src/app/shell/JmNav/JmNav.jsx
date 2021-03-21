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
  }
  handleButtonClick = async (id) => {
    await this.setState((state) => ({ activeButtonId: id }))
    this.onNavClick(id);
  }
  render() {
    return (
      <nav className="JmNav">
        <JmButton
          isActive={this.state.activeButtonId === 'about'}
          text="About"
          onClick={this.handleButtonClick.bind(this, 'about')}/>
        <JmButton
          isActive={this.state.activeButtonId === 'stack'}
          text="Stack"
          onClick={this.handleButtonClick.bind(this, 'stack')}/>
        <JmButton
          isActive={this.state.activeButtonId === 'projects'}
          text="Projects"
          onClick={this.handleButtonClick.bind(this, 'projects')}/>
      </nav>
    );
  }
}

export default JmNav;
