import React from 'react';
import './JmChips.scss';
import JmIcon from "../JmIcon/JmIcon";
import {JmListItem} from "../JmCombobox/JmCombobox";

type JmChipProps = {
  id: string;
  name: string;
  onRemove: (id: string) => void;
};

type JmChipsProps = {
  items: JmListItem[];
  selectedItems: string[];
  onRemove: (id: string) => void;
};

const JmChip = (props: JmChipProps) => {
  const { id, name, onRemove } = props;
  const handleRemoval = () => {
    onRemove(id);
  };

  return <div className="JmChip" key={id}>
    <span>{ name }</span>
    <JmIcon icon="close" fontSize="14" onClick={handleRemoval}/>
  </div>
};

function JmChips(props: JmChipsProps) {
  const { items, selectedItems, onRemove } = props;
  const chips: React.ReactElement[] = [];
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