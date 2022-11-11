import React from 'react';
import './JmButton.scss';

function JmButton(props) {
  const { text, onClick, isActive, isDisabled } = props;
  const classNames = `
  JmButton 
  ${isActive ? 'JmButton--active' : ''}
  ${isDisabled ? 'JmButton--disabled' : ''}
  `;
  return (
    <div className={classNames} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
}

export default JmButton;
