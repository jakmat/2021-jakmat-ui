import React from 'react';
import './JmListItem.scss';
import JmLink from "../../components/JmLink/JmLink";

const getLink = (url) => {
  if (url.href) return (<JmLink href={url.href} text={url.text}/>);
  else return (<span className="JmListItem-link">{url.text}</span>);
};

function JmListItem(props) {
  const { avatar, title, subtitle, details, urlData } = props.item;
  const { src, width, height } = avatar;
  const alt = `${title} logo`;
  const url = getLink(urlData);
  return (
    <li className="JmListItem">
      <div className="JmListItem-avatar">
        <img src={src} width={width} height={height} alt={alt}/>
      </div>
      <div className="JmListItem-details">
        <div className="JmListItem-title">
          <h4 className="JmListItem-name">{title}</h4>
          <span className="JmListItem-time">{subtitle}</span>
        </div>
        <p className="JmListItem-description">{details}</p>
        {url}
      </div>
    </li>
  );
}

export default JmListItem;