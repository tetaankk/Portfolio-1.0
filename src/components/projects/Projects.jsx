import React, { useState, useEffect } from "react";
import "./projects.scss";
import { projects } from "../../data";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projects);
  });

  return (
    <div id="projects" className="projects">
      <h3>Take a glance at my projects!</h3>
      {projectList.map((project) => (
        <div className="projectContainer">
          <div className="projectContainerLeft">
            <img src={project.img} />
          </div>
          <div className="projectContainerRight">
            <h2>{project.title}</h2>
            <div className="tagContainer">
              {project.tags.map((tag) => (
                <p className="tag">{tag}</p>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="tagContainer">
              <a
                href={project.liveLink}
                className="tag"
                target="_blank"
                style={{
                  "background-color": "green",
                  "padding-left": "15px",
                  "padding-right": "15px",
                  "margin-right": "35px",
                  "text-decoration": "none",
                  color: "white",
                  border: "none",
                }} rel="noreferrer"
              >
                LIVE VERSION
              </a>
              <a
                href={project.gitHubLink}
                className="tag"
                style={{ border: "none" }}
                target="_blank" rel="noreferrer"
              >
                <GitHubIcon style={{ fontSize: "25", color: "orange" }} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}