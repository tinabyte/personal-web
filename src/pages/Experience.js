import "../styles/Experience.css";
import React from "react";
import { TbBrandCpp, TbBrandReactNative, TbBrandPython } from "react-icons/tb";
import {
  SiStreamlit,
  SiClion,
  SiVisualstudiocode,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Experience() {
  return (
    <div className="experienceContainer">
      <h1 className="notionFont mediumFont">My current tech stack</h1>
      <div className="icons-column center">
        <Tooltip text="C++">
          <TbBrandCpp size="2.5em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="React Native">
          <TbBrandReactNative size="2.3em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="Python">
          <TbBrandPython size="2.2em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="Streamlit">
          <SiStreamlit size="2.3em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="CLion">
          <SiClion size="2em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="Visual Studio Code">
          <SiVisualstudiocode size="2em" color="darkGrey" />
        </Tooltip>
        <Tooltip text="Firebase">
          <SiFirebase size="2em" color="darkGrey" />
        </Tooltip>
      </div>
    </div>
  );
}

function Tooltip({ text, children }) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
}

export default Experience;
