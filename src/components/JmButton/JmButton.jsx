import React from 'react';
import './JmButton.scss';

function JmButton(props) {
  const onClick = () => props.onClick(props.id);
  return (
    <div className="JmButton" onClick={onClick}>
      <span>{props.text}</span>
    </div>
  );
}

export default JmButton;
