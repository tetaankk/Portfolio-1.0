import "./contacts.scss";
import "../../common.scss";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import React from "react";

export default function Contacts() {
  return (
    <div id="contacts" className="contacts">
      <h3 className="common_h3">Contact</h3>
      <h2>
        If I succeeded in catching your attention, let's get in touch and
        discuss opportunities!{" "}
      </h2>
      <div className="contactCard">
        <img src="../../../IMG_8946.jpeg" alt="Profile" />
        <div className="contactCardRight">
          <p>
            Tero Ankkuri{" "}
            <a
              href="https://www.linkedin.com/in/tero-ankkuri-751896145/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="common_contactIcons" />
            </a>
            <a
              href="https://github.com/tetaankk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="common_contactIcons" />
            </a>
          </p>
          <p>
            <a href="mailto:teroankkuri@gmail.com">teroankkuri@gmail.com</a>
          </p>
          <p>
            <a href="tel:0407658775">+358 40 7658 775</a>
          </p>
        </div>
      </div>
    </div>
  );
}
