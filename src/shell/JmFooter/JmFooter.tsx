import React from 'react';
import './JmFooter.scss';
import JmIcon from "../../common/components/JmIcon/JmIcon";

function JmFooter() {
  const iconLigature = 'copyright';
  const iconSize = '1em';
  const credit = '2021 jakmat';
  return (
    <footer className="JmFooter">
      <JmIcon icon={iconLigature} fontSize={iconSize}/>
      <span className="JmFooter-credit">{credit}</span>
    </footer>
  );
}

export default JmFooter;
