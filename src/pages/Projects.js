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
        <div className="column" style={{ textAlign: "left" }}>
          <h3>
            <strong>Project: bNicer</strong>
          </h3>
          <p>
            During the SASE Hacks event, I collaborated with a team of three to
            create a project named bNicer. Our goal was to develop a web
            application aimed at educating people about cyberbullying using
            real-life examples. This application functions by accepting any
            YouTube URL, after which it sifts through the comments, identifying
            any that could be considered harmful. To further this education, our
            website also features articles relevant to the type of cyberbullying
            identified in the comments, providing a targeted understanding of
            the issue. I contributed towards the entire front-end and programmed
            algorithm to parse through the YouTube data!
          </p>
          <p> Feel free to explore bNicer by clicking to the left!</p>
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
        <div className="column" style={{ textAlign: "left" }}>
          <h3>
            <strong>Project: Spotlyte</strong>
          </h3>
          <p>
            At HackGT, I teamed up with three other talented individuals to
            bring Spotlyte to life - a project primarily designed for students.
            Spotlyte is a web application that streamlines learning by accepting
            either a Zoom URL or a large MP4 file of a lengthy lecture. It then
            sifts through the subtitles, creating an informative PDF summary
            that contains key titles and subtitles from the lecture. I
            contributed towards the front-end of the web app by integrating
            Lottie API and YouTube Transcript API to help students integrate
            online resources to their learning!
          </p>
          <p> Feel free to explore bNicer by clicking to the left!</p>
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
        <div className="column" style={{ textAlign: "left" }}>
          <h3>
            <strong>Project: GotCovid?</strong>
          </h3>
          <p>
            I created this app/project in my bedroom. During the Covid-19
            pandemic, I’ve noticed a lot of people concerned about spreading
            covid-19 around. GotCovid is an application designed to alleviate
            pandemic-induced anxiety. The app allows users to log down their
            contacts, locate vaccination centers, access Covid-19 data, and
            report their status anonymously (notifying their contacts
            anonymously if they’ve contracted covid-19). I created this
            full-stack iOS app to facilitate contact tracing and virus spread
            prevention. To do this, I used Google Cloud’s firebase for the
            backend and Xcode for the frontend. I also used Twillio’s API to
            send out messages warning those who has a good chance of also
            contracting the virus!
          </p>
          <p> Feel free to explore bNicer by clicking to the left!</p>
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
        <div className="column" style={{ textAlign: "left" }}>
          <h3>
            <strong>Project: Your Safe Haven</strong>
          </h3>
          <p>
            I created this project during my summer immersion program with
            GirlsWhoCode. A lot of friends were very stressed and unaware of
            existing mental health issues. So, I created Your Safe Haven to
            create an online safe spot for my friends. This website is contains
            a space-like theme with twinkling stars throughout. It also contains
            lo-fi music in a circular queue. This website was created in 2019
            using pure HTML, CSS, JS and hosted on repl.it!
          </p>
          <p> Feel free to explore bNicer by clicking to the left!</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
