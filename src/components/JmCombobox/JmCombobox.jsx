import React, { useState, useEffect } from 'react';
import './JmCombobox.scss';
import JmChips from "../JmChips/JmChips";
import JmMenu from "../JmMenu/JmMenu";

function JmCombobox(props) {
  const { items, label, onSelection, hasInput, hasMenu } = props;
  const [isMenuOpened, setIsMenuOpened] = useState(props.isMenuOpened);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelection = (id) => {
    if (selectedItems.includes(id)) setSelectedItems(selectedItems.filter(item => item !== id));
    else setSelectedItems([...selectedItems, id]);
  };

  const handleInputClick = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  useEffect(() => {
    onSelection(selectedItems);
  }, [selectedItems]);

  const getInput = () => {
    return <div className="JmComboboxInput" onClick={handleInputClick}>
      <div className="JmCombobox__placeholder">{ placeholder }</div>
      <div className="JmCombobox__chips">{ chips }</div>
    </div>;
  };

  const placeholder = selectedItems.length ? null : <span className={"JmPlaceholder"}>{ props.placeholder }</span>;
  const chips = selectedItems.length ? JmChips({ items, selectedItems, onRemove: handleSelection }) : null;
  const menu = hasMenu && isMenuOpened ? JmMenu({ items, selectedItems, onSelection: handleSelection }) : null;
  const input = hasInput ? getInput() : null;

  return (
    <div className="JmCombobox">
      <label className="JmCombobox__label">{ label }</label>
      <div className="JmCombobox__input">{ input }</div>
      <div className="JmCombobox__menu">{ menu }</div>
    </div>
  );
}

export default JmCombobox;