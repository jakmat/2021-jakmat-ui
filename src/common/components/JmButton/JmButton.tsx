import React from 'react';
import './JmButton.scss';

type JmButtonProps = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

function JmButton(props: JmButtonProps) {
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
