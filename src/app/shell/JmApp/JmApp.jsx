import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader";
import JmNav from "../JmNav/JmNav";
import JmMain from "../JmMain/JmMain";
import JmFooter from "../JmFooter/JmFooter";
import JmAbout from "../../views/about/JmAbout";
import JmStack from "../../views/stack/JmStack";
import JmProjects from "../../views/projects/JmProjects";

function JmApp() {
  const [contents] = useState({
    about: JmAbout,
    stack: JmStack,
    projects: JmProjects
  });
  const [currentContent, setCurrentContent] = useState(JmStack);
  const [activeButtonId, setActiveButtonId] = useState('stack');
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