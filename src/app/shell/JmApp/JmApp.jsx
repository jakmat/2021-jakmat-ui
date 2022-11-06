import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader";
import JmNav from "../JmNav/JmNav";
import JmMain from "../JmMain/JmMain";
import JmFooter from "../JmFooter/JmFooter";
import JmAbout from "../../views/about/JmAbout";
import JmStack from "../../views/stack/JmStack";
import JmProjects from "../../views/projects/JmProjects";
import JmLab from "../../views/lab/JmLab";

function JmApp() {
  const contents = {
    about: JmAbout,
    stack: JmStack,
    projects: JmProjects,
    lab: JmLab
  };
  const [currentContent, setCurrentContent] = useState(JmLab);
  const [activeButtonId, setActiveButtonId] = useState('lab');
  const handleViewChange = (content) => {
    setActiveButtonId(content);
    setCurrentContent(contents[content]);
  };
  return (
    <div className="JmApp">
      <JmHeader/>
      <JmNav activeButtonId={activeButtonId} onNavClick={handleViewChange}/>
      <JmMain children={currentContent}/>
      <JmFooter/>
    </div>
  );
}

export default JmApp;