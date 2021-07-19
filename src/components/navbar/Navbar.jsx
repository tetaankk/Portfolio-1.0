import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Navbar() {
  const scrollToTop = function () {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-header-logo">TA</div>
      <div className="navbar-items">
        <ul>
          <li>
            <Link to="" smooth={true} duration={500} onClick={scrollToTop}>
              <span className="first-word">Ho</span>
              <span className="second-word">me</span>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              <span className="first-word">Proj</span>
              <span className="second-word">ects</span>
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={500}>
              <span className="first-word">Con</span>
              <span className="second-word">tact</span>
            </Link>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/tero-ankkuri-751896145/"
              target="_blank"
              rel="noreferrer"
              className="contactIcon"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tetaankk"
              target="_blank"
              rel="noreferrer"
              className="contactIcon"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
