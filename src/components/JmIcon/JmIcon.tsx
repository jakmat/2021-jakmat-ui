import React from 'react';
import './JmIcon.scss';
import CopyrightIcon from '@material-ui/icons/Copyright';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';

const materialIcons: Record<string, React.ReactElement> = {
  copyright: <CopyrightIcon/>,
  work: <WorkIcon/>,
  build: <BuildIcon/>,
  home: <HomeIcon/>,
  link: <LinkIcon/>,
  language: <LanguageIcon/>,
  checkboxChecked: <CheckBoxIcon/>,
  checkboxUnchecked: <CheckBoxOutlineBlankIcon/>,
  close: <CloseIcon/>
};

type JsIconProps = {
  icon: string;
  fontSize: string;
  onClick?: () => void;
}

function JmIcon(props: JsIconProps) {
  const { icon, fontSize, onClick } = props;
  const materialIcon = React.cloneElement(materialIcons[icon], { style: { fontSize } });
  return (
    <i className="JmIcon" onClick={onClick}>{materialIcon}</i>
  );
}

export default JmIcon;