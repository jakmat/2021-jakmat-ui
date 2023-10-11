import React from 'react';
import './JmIcon.scss';
import {
    MdCopyright,
    MdWork,
    MdLanguage,
    MdBuild,
    MdHome,
    MdLink,
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdClose,
} from "react-icons/md";

const materialIcons: Record<string, React.ReactElement> = {
  copyright: <MdCopyright/>,
  work: <MdWork/>,
  build: <MdBuild/>,
  home: <MdHome/>,
  link: <MdLink/>,
  language: <MdLanguage/>,
  checkboxChecked: <MdCheckBox/>,
  checkboxUnchecked: <MdCheckBoxOutlineBlank/>,
  close: <MdClose/>
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