import React from 'react';
import './JmButton.scss';

function JmButton(props) {
  const { text, onClick, isActive } = props;
  const classNames = `JmButton ${isActive ? 'JmButton--active' : ''}`;
  return (
    <div className={classNames} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}

export default JmButton;
