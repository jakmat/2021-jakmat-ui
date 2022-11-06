import React, { useState } from 'react';
import './JmMenu.scss';
import JmIcon from "../JmIcon/JmIcon";

const JmMenuItem = (props) => {
  const { id, name, selected, onSelection } = props;
  const iconLigature = selected ? 'checkboxChecked' : 'checkboxUnchecked';
  return <div className="JmMenuItem" key={id} onClick={() => onSelection(id)}>
    <div className="JmCheckbox">
      <JmIcon icon={iconLigature}/>
    </div>
    <div className="JmLabel">
      <span>{ name }</span>
    </div>
  </div>;
};

function JmMenu(props) {
  const { items, selectedItems, onSelection } = props;
  const menu = items.map((item) => {
    const { id, name } = item;
    const selected = selectedItems.includes(id);
    return JmMenuItem({ id, name, selected, onSelection })
  });
  return <div className="JmMenu">{ menu }</div>;
}

export default JmMenu;