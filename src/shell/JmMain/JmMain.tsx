import React, { useState, useEffect } from 'react';
import './JmMain.scss';
// import JmStack from "../../views/stack/JmStack.tsx";
// import JmProjects from "../../views/projects/JmProjects.tsx";
// import JmAbout from "../../views/about/JmAbout.tsx";
// import JmLab from "../../views/lab/JmLab.tsx";

type JmMainProps = {
  children: any
};

function JmMain(props: JmMainProps) {
  // const views = {
  //   stack: <JmStack view={props.view}/>,
  //   projects: <JmProjects view={props.view}/>,
  //   about: <JmAbout view={props.view}/>,
  //   lab: <JmLab view={props.view}/>
  // };
  // const [component, setComponent]= useState(null);
  // const getComponent = (id) => views[id];
  // useEffect(() => {
  //   setComponent(views[props.view.id]);
  // }, [props.view]);

  return (
    <main className="JmMain">
      { props.children }
      {/*<JmStack view={props.view}/>*/}
      {/*<JmProjects view={props.view}/>*/}
      {/*<JmAbout view={props.view}/>*/}
      {/*<JmLab view={props.view}/>*/}
    </main>
  );
}

export default JmMain;
