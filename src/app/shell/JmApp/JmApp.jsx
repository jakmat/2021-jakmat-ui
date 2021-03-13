import React, { Component } from 'react';
import './JmApp.scss';
import JmNav from "../JmNav/JmNav.jsx";
import JmMain from "../JmMain/JmMain";
import JmAbout from "../../views/about/JmAbout";
import JmStack from "../../views/stack/JmStack";
import JmProjects from "../../views/projects/JmProjects";
import CopyrightIcon from '@material-ui/icons/Copyright';

class JmApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {
        about: JmAbout,
        stack: JmStack,
        projects: JmProjects
      },
      logoSrc: `${process.env.PUBLIC_URL}/assets/jakmat-webdev.png`,
      currentContent: JmAbout
    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(content) {
    const currentContent = this.state.contents[content];
    this.setState(state => ({ currentContent }));
  }
  render() {
    return (
      <div className="JmApp">
        <header className="JmApp-header">
          <img src={this.state.logoSrc} className="JmApp-logo" alt="logo" />
          <div className="JmApp-headline">
            <h1 className="JmApp-title">Jakub Matusiak</h1>
            <h2 className="JmApp-subtitle">Geospatial Web Developer</h2>
          </div>
        </header>
        <JmNav onNavClick={this.handleViewChange}/>
        <JmMain children={this.state.currentContent()}/>
        <footer className="JmApp-footer">
          <CopyrightIcon className="JmApp-footer__icon" style={{ fontSize: '1em' }}/>
          <span>2020 jakmat</span>
        </footer>
      </div>
    );
  }
}

export default JmApp;
