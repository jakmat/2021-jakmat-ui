import React from 'react';
import JmListItem from "./JmListItem";
import './JmList.scss';

function JmList(props) {
  const items = props.items.map((i) => {
    const { avatar, name, startYear, endYear, details, url, type } = i;
    const isUrl = url && url.href;
    const urlData = isUrl ? { ...url, text: url.text } : { ...url };
    const endTime = endYear ? endYear : 'now';
    const timeSpan = `${startYear} - ${endTime}`;
    const title = name;
    const subtitle = type ? `${type}: ${timeSpan}` : timeSpan;
    const item = { avatar, title, subtitle, details, urlData };
    return (<JmListItem item={item} key={i.id} />);
  });
  return (
    <ul className="JmList">{items}</ul>
  );
}

export default JmList;