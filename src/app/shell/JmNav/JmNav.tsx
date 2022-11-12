import React, { useState } from 'react';
import './JmNav.scss';
import JmButton from '../../../components/JmButton/JmButton';

function JmNav(props) {
  const nav = [
    { id: 'stack', text: 'Tech Stack' },
    { id: 'projects', text: 'Projects' },
    { id: 'about', text: 'About Me' },
    { id: 'lab', text: 'Lab' }
  ];
  const [activeButtonId, setActiveButtonId] = useState('stack');
  const getNav = () => {
    return nav.map((view) => {
      return <JmButton
        key={view.id}
        isActive={activeButtonId === view.id}
        text={view.text}
        onClick={() => handleButtonClick(view.id)}/>
    });
  }
  const handleButtonClick = (viewId) => {
    setActiveButtonId(viewId);
    props.onViewChange(viewId);
  }
  return (
    <nav className="JmNav">
      {getNav()}
    </nav>
  );
}

export default JmNav;