import React, { useState, useEffect } from 'react';
import './JmCombobox.scss';
import JmChips from "../JmChips/JmChips";
import JmMenu from "../JmMenu/JmMenu";

function JmCombobox(props) {
  const { items, label, placeholder, onSelection } = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);
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

  const chips = JmChips({ items, selectedItems });
  const menu = isMenuOpened ? JmMenu({ items, selectedItems, onSelection: handleSelection }) : null;

  return (
    <div className="JmCombobox">
      <label className="JmCombobox__label">{ label }</label>
      <div className="JmCombobox__input" onClick={handleInputClick}>
        <span className="JmCombobox__placeholder">{ placeholder }</span>
        <div className="JmCombobox__chips">{ chips }</div>
      </div>
      <div className="JmCombobox__menu">{ menu }</div>
    </div>
  );
}

export default JmCombobox;