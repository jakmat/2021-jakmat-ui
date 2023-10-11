import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader";
import JmNav from "../JmNav/JmNav";
import JmMain from "../JmMain/JmMain";
import JmFooter from "../JmFooter/JmFooter";
import JmStack from "../../../stack/JmStack";
import JmProjects from "../../../projects/JmProjects";
import JmAbout from "../../../about/JmAbout";
import JmLab from "../../../lab/JmLab";

function JmApp() {
  const contents: Record<string, () => React.ReactElement> = {
    about: JmAbout,
    stack: JmStack,
    projects: JmProjects,
    lab: JmLab
  };

  const isProductionEnv = process.env.NODE_ENV === 'production';
  const initialView = {
      id: isProductionEnv ? 'stack' : 'lab',
      content: isProductionEnv ? JmStack : JmLab,
  };

  const [currentContent, setCurrentContent] = useState(initialView.content);
  const [activeButtonId, setActiveButtonId] = useState(initialView.id);

  const handleViewChange = (content: string) => {
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