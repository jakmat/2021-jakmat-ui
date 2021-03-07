import React from 'react';
import './JmNav.scss';
import JmButton from '../../../components/JmButton/JmButton';

function JmNav(props) {
  return (
    <div className="JmNav">
      <JmButton id="about" text="About" onClick={props.onNavClick}/>
      <JmButton id="stack" text="Stack" onClick={props.onNavClick}/>
      <JmButton id="projects" text="Projects" onClick={props.onNavClick}/>
    </div>
  );
}

export default JmNav;
