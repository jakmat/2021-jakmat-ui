import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader.tsx";
import JmNav from "../JmNav/JmNav.tsx";
import JmMain from "../JmMain/JmMain.tsx";
import JmFooter from "../JmFooter/JmFooter.tsx";
import JmAbout from "../../views/about/JmAbout";
import JmStack from "../../views/stack/JmStack";
import JmProjects from "../../views/projects/JmProjects";
import JmLab from "../../views/lab/JmLab.tsx";

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