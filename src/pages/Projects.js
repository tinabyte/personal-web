import "../styles/Projects.css";
import React from "react";

import bNicer from "../images/bnicer.png";
import gotCovid from "../images/gotCovid.png";
import spotlyte from "../images/spotlyte.png";
import yourSafeHaven from "../images/yourSafeHaven.png";

import bNicerGif from "../images/bnicer.gif";
import gotCovidGif from "../images/gotCovid.gif";
import spotlyteGif from "../images/spotlyte.gif";
import yourSafeHavenGif from "../images/mySafeHaven.gif";

function Projects() {
  return (
    <div className="projectsContainer">
      <h1 className="largeFont notionFont">Projects</h1>
      <div className="flex-container">
        <div className="column  image-container">
          <a href="https://devpost.com/software/bnice">
            <img
              className="tinaimg"
              src={bNicer}
              alt="bNicer Project"
              onMouseOver={(e) => (e.currentTarget.src = bNicerGif)}
              onMouseOut={(e) => (e.currentTarget.src = bNicer)}
            />
          </a>
        </div>
        <div className="column">
          Some of the qualifications and skills that I have learned during my
          freshman year (this year) are working alongside other people
          efficiently and thoroughly. This year, I have been involved in
          attending many GBMs, being an Intern at SASE, interning at Florida
          Community Innovation, and Historian of the Society of PC Building.
          Before college, I was class body president, founder, and president of
          the Computer Science Club and Chinese Club. Below are the skills and
          experiences I’ve gained from them.
        </div>
        <div className="column">
          <a href="https://devpost.com/software/spotlyte-k3nq7d">
            <img
              className="tinaimg image-container"
              src={spotlyte}
              alt="spotlyte Project"
              onMouseOver={(e) => (e.currentTarget.src = spotlyteGif)}
              onMouseOut={(e) => (e.currentTarget.src = spotlyte)}
            />
          </a>
        </div>
        <div className="column">
          Some of the qualifications and skills that I have learned during my
          freshman year (this year) are working alongside other people
          efficiently and thoroughly. This year, I have been involved in
          attending many GBMs, being an Intern at SASE, interning at Florida
          Community Innovation, and Historian of the Society of PC Building.
          Before college, I was class body president, founder, and president of
          the Computer Science Club and Chinese Club. Below are the skills and
          experiences I’ve gained from them.
        </div>
        <div className="column">
          <a href="https://www.congressionalappchallenge.us/21-fl22/">
            <img
              className="tinaimg"
              src={gotCovid}
              alt="got covid project"
              onMouseOver={(e) => (e.currentTarget.src = gotCovidGif)}
              onMouseOut={(e) => (e.currentTarget.src = gotCovid)}
            />
          </a>
        </div>
        <div className="column">
          Some of the qualifications and skills that I have learned during my
          freshman year (this year) are working alongside other people
          efficiently and thoroughly. This year, I have been involved in
          attending many GBMs, being an Intern at SASE, interning at Florida
          Community Innovation, and Historian of the Society of PC Building.
          Before college, I was class body president, founder, and president of
          the Computer Science Club and Chinese Club. Below are the skills and
          experiences I’ve gained from them.
        </div>
        <div className="column">
          <a href="https://your-safe-haven.tinac592.repl.co">
            <img
              className="tinaimg"
              src={yourSafeHaven}
              alt="your safe haven project"
              onMouseOver={(e) => (e.currentTarget.src = yourSafeHavenGif)}
              onMouseOut={(e) => (e.currentTarget.src = yourSafeHaven)}
            />
          </a>
        </div>
        <div className="column">
          Some of the qualifications and skills that I have learned during my
          freshman year (this year) are working alongside other people
          efficiently and thoroughly. This year, I have been involved in
          attending many GBMs, being an Intern at SASE, interning at Florida
          Community Innovation, and Historian of the Society of PC Building.
          Before college, I was class body president, founder, and president of
          the Computer Science Club and Chinese Club. Below are the skills and
          experiences I’ve gained from them.
        </div>
      </div>
    </div>
  );
}

export default Projects;
