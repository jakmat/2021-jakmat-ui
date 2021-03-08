import React from 'react';
import JmListItem from "./JmListItem";
import './JmList.scss';

function JmList(props) {
  const items = props.items.map((i) => {
    const { avatar, name, startYear, endYear, details } = i;
    const avatarSrc = `../../assets/${avatar}`;
    const endTime = endYear ? endYear : 'now';
    const timeSpan = `${startYear} - ${endTime}`;
    const item = { avatarSrc, name, timeSpan, details };
    return (<JmListItem item={item} key={i.id} />);
  });
  return (
    <ul className="JmList">{items}</ul>
  );
}

export default JmList;