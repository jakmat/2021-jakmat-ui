import React from 'react';
// import './JmChips.scss';

const JmChip = (props) => {
  const { id, name } = props;
  return <div className="JmChip" key={id}>
    <span>{ name }</span>
  </div>
};

function JmChips(props) {
  const { items, selectedItems } = props;
  const chips = [];
  items.forEach((item) => {
    const { id, name } = item;
    if (selectedItems.includes(id)) {
      const chip = JmChip({ id, name });
      chips.push(chip);
    }
  });
  return chips;
}

export default JmChips;