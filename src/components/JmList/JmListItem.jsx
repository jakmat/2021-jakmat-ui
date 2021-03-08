import React from 'react';
import './JmListItem.scss';

function JmListItem(props) {
  const { avatarSrc, name, timeSpan, details } = props.item;
  return (
    <li className="JmListItem">
      <img className="JmListItem-avatar" src={avatarSrc}/>
      <div className="JmListItem-details">
        <h4 className="JmListItem-name">{name}</h4>
        <h5 className="JmListItem-time">{timeSpan}</h5>
        <p className="JmListItem-description">{details}</p>
      </div>
    </li>
  );
}

export default JmListItem;