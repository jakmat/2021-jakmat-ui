import React from 'react';
import './JmMain.scss';

function JmMain(props) {
  return (
    <main className="JmMain">{props.children}</main>
  );
}

export default JmMain;
