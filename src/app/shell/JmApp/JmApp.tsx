import React, { useState } from 'react';
import './JmApp.scss';
import JmHeader from "../JmHeader/JmHeader.tsx";
import JmNav from "../JmNav/JmNav.tsx";
import JmMain from "../JmMain/JmMain.tsx";
import JmFooter from "../JmFooter/JmFooter.tsx";

function JmApp() {
  const contents = {
    stack: { id: 'stack', className: 'JmStack' },
    projects: { id: 'projects', className: 'JmProjects' },
    about: { id: 'about', className: 'JmAbout' },
    lab: { id: 'lab', className: 'JmLab' }
  };
  const [view, setView] = useState(contents.lab);
  const handleViewChange = (id) => {
    setView(contents[id]);
  };
  return (
    <div className="JmApp">
      <JmHeader/>
      <JmNav activeButtonId={view.id} onViewChange={handleViewChange}/>
      <JmMain view={view}/>
      <JmFooter/>
    </div>
  );
}

export default JmApp;