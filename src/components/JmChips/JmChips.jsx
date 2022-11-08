import React from 'react';
import './JmChips.scss';
import JmIcon from "../JmIcon/JmIcon";

const JmChip = (props) => {
  const { id, name, onRemove } = props;
  const handleRemoval = () => {
    onRemove(id);
  };

  return <div className="JmChip" key={id}>
    <span>{ name }</span>
    <JmIcon icon="close" fontSize="14" onClick={handleRemoval}/>
  </div>
};

function JmChips(props) {
  const { items, selectedItems, onRemove } = props;
  const chips = [];
  items.forEach((item) => {
    const { id, name } = item;
    if (selectedItems.includes(id)) {
      const chip = JmChip({ id, name, onRemove });
      chips.push(chip);
    }
  });
  return chips;
}

export default JmChips;