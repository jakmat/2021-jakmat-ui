import React, { Component } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader";
import JmNav from "../JmNav/JmNav";
import JmMain from "../JmMain/JmMain";
import JmFooter from "../JmFooter/JmFooter";
import JmAbout from "../../views/about/JmAbout";
import JmStack from "../../views/stack/JmStack";
import JmProjects from "../../views/projects/JmProjects";

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
      currentContent: JmStack,
      activeButtonId: 'stack'
    }
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(content) {
    const activeButtonId = content;
    const currentContent = this.state.contents[content];
    this.setState(state => ({ activeButtonId, currentContent }));
  }
  render() {
    return (
      <div className="JmApp">
        <JmHeader/>
        <JmNav activeButtonId={this.activeButtonId} onNavClick={this.handleViewChange}/>
        <JmMain children={this.state.currentContent()}/>
        <JmFooter/>
      </div>
    );
  }
}

export default JmApp;
