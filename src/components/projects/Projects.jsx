import React, { useState, useEffect } from "react";
import "./projects.scss";
import "../../common.scss";
import { projects } from "../../data";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projects);
  }, []);

  return (
    <div id="projects" className="projects">
      <h3>Projects</h3>
      {projectList.map((project) => (
        <div className="projectContainer" key={project.id}>
          <div className="projectContainerLeft">
            <img src={project.img} alt="Project screenshot" />
          </div>
          <div className="projectContainerRight">
            <h2>{project.title}</h2>
            <div className="tagContainer">
              {project.tags.map((tag) => (
                <p className="tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="tagContainer">
              <a
                href={project.liveLink}
                className="liveTag liveTag2"
                target="_blank"
                rel="noreferrer"
              >
                LIVE VERSION
              </a>
              <a
                href={project.gitHubLink}
                className="liveTag"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
