import React, { Component } from 'react';
import './JmNav.scss';
import JmButton from '../../../components/JmButton/JmButton';

const nav = [
  { id: 'stack', text: 'Tech Stack' },
  { id: 'projects', text: 'Projects' },
  { id: 'about', text: 'About Me' }
];

class JmNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtonId: 'stack'
    };
    this.onNavClick = props.onNavClick;
  }
  getNav = () => nav.map(i => <JmButton key={i.id} isActive={this.state.activeButtonId === i.id} text={i.text} onClick={this.handleButtonClick.bind(this, i.id)}/>);
  handleButtonClick = async (id) => {
    await this.setState((state) => ({ activeButtonId: id }))
    this.onNavClick(id);
  }
  render() {
    return (
      <nav className="JmNav">
        {this.getNav()}
      </nav>
    );
  }
}

export default JmNav;
