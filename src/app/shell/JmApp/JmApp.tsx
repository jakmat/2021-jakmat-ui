import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader.tsx";
import JmNav from "../JmNav/JmNav.tsx";
import JmMain from "../JmMain/JmMain.tsx";
import JmFooter from "../JmFooter/JmFooter.tsx";
import JmStack from "../../views/stack/JmStack.tsx";
import JmProjects from "../../views/projects/JmProjects.tsx";
import JmAbout from "../../views/about/JmAbout.tsx";
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
  // const contents = {
  //   stack: { id: 'stack', className: 'JmStack', component: JmStack },
  //   projects: { id: 'projects', className: 'JmProjects', component: JmProjects },
  //   about: { id: 'about', className: 'JmAbout', component: JmAbout },
  //   lab: { id: 'lab', className: 'JmLab', component: JmLab }
  // };
  // const [view, setView] = useState(contents.lab);
  // const handleViewChange = (id) => {
  //   setView(contents[id]);
  // };
  return (
    <div className="JmApp">
      <JmHeader/>
      <JmNav activeButtonId={activeButtonId} onViewChange={handleViewChange}/>
      <JmMain children={currentContent}/>
      <JmFooter/>
    </div>
  );
}

export default JmApp;