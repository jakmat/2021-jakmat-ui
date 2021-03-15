import React from 'react';
import './JmIcon.scss';
import CopyrightIcon from '@material-ui/icons/Copyright';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';


const materialIcons = {
  copyright: <CopyrightIcon/>,
  work: <WorkIcon/>,
  build: <BuildIcon/>,
  home: <HomeIcon/>,
  link: <LinkIcon/>,
  language: <LanguageIcon/>
};

function JmIcon(props) {
  const { icon, fontSize } = props;
  const materialIcon = React.cloneElement(materialIcons[icon], { style: { fontSize } });
  return (
    <i className="JmIcon">{materialIcon}</i>
  );
}

export default JmIcon;