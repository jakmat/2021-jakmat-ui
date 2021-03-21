import React from 'react';
import './JmButton.scss';

function JmButton(props) {
  const { text, onClick } = props;
  return (
    <div className="JmButton" onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}

export default JmButton;
