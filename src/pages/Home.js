import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import doodleGirl from "../images/tine.png";
import Typed from "typed.js";
// import { Link } from "react-router-dom";
import { ImInstagram, ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Tina Chi!",
        "a software engineer.",
        "a student.",
        "a photographer.",
      ],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup the Typed instance when the component is unmounted
    };
  }, []);

  return (
    <div className="flex-container home-container">
      <div className="leftColumn flex-item">
        <h1 className="largeFont leftAlign">Hello World!</h1>
        <h1 className="mediumFont leftAlign">
          I am <span ref={el}></span>
        </h1>
        <h1 className="smallFont leftAlign notionFont">
          🎓 University of Florida{" "}
        </h1>
        <h1 className="smallFont leftAlign notionFont">
          📍 Lived in FuZhou, Brooklyn, CoralSprings, Gainesville (current){" "}
        </h1>
        <h1 className="smallFont leftAlign notionFont">
          📚 Current reading: Influence by Robert Cialdini{" "}
        </h1>

        <div className="icon-container">
          <a href="https://www.linkedin.com/in/tina-chi-2940a7229/">
            <ImLinkedin color="black" size="1.5em" />
          </a>
          <a href="https://github.com/tinabyte">
            <FaGithubSquare color="black" size="1.5em" />
          </a>
          <a href="https://www.instagram.com/tin4byte/">
            <ImInstagram color="black" size="1.5em" />
          </a>
        </div>
      </div>

      <div className="flex-item rightColumn leftAligned">
        <img className="tinaimg" src={doodleGirl} alt="Tina Chi" />
      </div>
    </div>
  );
}

export default Home;
