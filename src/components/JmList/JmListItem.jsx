import React from 'react';
import './JmListItem.scss';

const getLink = (url) => {
  if (url.href) return (<a className="JmListItem-link" href={url.href} target="_blank">{url.text}</a>);
  else return (<span className="JmListItem-link">{url.text}</span>);
};

function JmListItem(props) {
  const { avatar, title, subtitle, details, urlData } = props.item;
  const { src, width, height } = avatar;
  const url = getLink(urlData);
  return (
    <li className="JmListItem">
      <div className="JmListItem-avatar">
        <img src={src} width={width} height={height}/>
      </div>
      <div className="JmListItem-details">
        <div className="JmListItem-title">
          <h4 className="JmListItem-name">{title}</h4>
          <span className="JmListItem-time">{subtitle}</span>
        </div>
        {url}
        <p className="JmListItem-description">{details}</p>
      </div>
    </li>
  );
}

export default JmListItem;