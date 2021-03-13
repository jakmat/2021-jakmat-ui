import React from 'react';
import './JmFooter.scss';
import CopyrightIcon from '@material-ui/icons/Copyright';

function JmFooter() {
  const credit = '2020 jakmat';
  return (
    <footer className="JmFooter">
      <CopyrightIcon className="JmFooter-copyright" style={{ fontSize: '1em' }}/>
      <span className="JmFooter-credit">{credit}</span>
    </footer>
  );
}

export default JmFooter;
