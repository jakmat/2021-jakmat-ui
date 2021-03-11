import React from 'react';
import JmListItem from "./JmListItem";
import './JmList.scss';

function JmList(props) {
  const items = props.items.map((i) => {
    const { avatar, name, startYear, endYear, details, url, type } = i;
    const urlData = url.href ? { ...url, text: `[ ${url.text} ]` } : { ...url };
    const endTime = endYear ? endYear : 'now';
    const timeSpan = `${startYear} - ${endTime}`;
    const title = name;
    const subtitle = `${type}: ${timeSpan}`;
    const item = { avatar, title, subtitle, details, urlData };
    return (<JmListItem item={item} key={i.id} />);
  });
  return (
    <ul className="JmList">{items}</ul>
  );
}

export default JmList;