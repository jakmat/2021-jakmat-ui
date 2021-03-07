import React from 'react';
import './JmContent.scss';

function JmContent(props) {
  return (
    <section className="JmContent">{props.children}</section>
  );
}

export default JmContent;
