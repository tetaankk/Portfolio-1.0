import React from "react";
import "./navbar.scss";
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <span className="navbar-header-letter">t</span>
        <span className="navbar-header-letter">a</span>
        <span className="navbar-header-letter">n</span>
        <span className="navbar-header-letter">k</span>
        <span className="navbar-header-letter">k</span>
        <span className="navbar-header-letter">u</span>
        <span className="navbar-header-letter">r</span>
        <span className="navbar-header-letter">i</span>
      </div>

      <div className="navbar-items">
        <ul>
          <li>
            <Link to="/">
              <span className="first-word">H</span>
              <span className="second-word">o</span>
              <span className="first-word">m</span>
              <span className="second-word">e</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span className="first-word">P</span>
              <span className="second-word">r</span>
              <span className="first-word">o</span>
              <span className="second-word">j</span>
              <span className="first-word">e</span>
              <span className="second-word">c</span>
              <span className="first-word">t</span>
              <span className="second-word">s</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="first-word">A</span>
              <span className="second-word">b</span>
              <span className="first-word">o</span>
              <span className="second-word">u</span>
              <span className="first-word">t</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="first-word">C</span>
              <span className="second-word">o</span>
              <span className="first-word">n</span>
              <span className="second-word">t</span>
              <span className="first-word">a</span>
              <span className="second-word">c</span>
              <span className="first-word">t</span>
              <span className="second-word">s</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
