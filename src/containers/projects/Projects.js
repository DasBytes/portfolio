import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {bigProjects, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects?.display) {
    return null;
  }

  return (
    <div className="main" id="projects">
      <h1 className="project-title">{bigProjects.title}</h1>
      <p className="section-subtitle">{bigProjects.subtitle}</p>

      <div className="repo-cards-div-main">
        {bigProjects.projects && bigProjects.projects.length > 0 ? (
          bigProjects.projects.map((project, i) => (
            <Fade bottom duration={1000} distance="20px" key={i}>
              <div
                className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
                onClick={() => {
                  if (project.footerLink?.[0]?.url) {
                    window.open(project.footerLink[0].url, "_blank");
                  }
                }}
                style={{cursor: "pointer", minWidth: 0, overflow: "hidden"}}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.projectName}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "1rem"
                    }}
                  />
                )}
                <h3 className="repo-name">{project.projectName}</h3>
                <p className="repo-description">{project.projectDesc}</p>
                {project.footerLink && project.footerLink.length > 0 && (
                  <div style={{marginTop: "1rem", fontSize: "14px"}}>
                    <a
                      href={project.footerLink[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={isDark ? {color: "#00d4ff"} : {color: "#1e90ff"}}
                    >
                      {project.footerLink[0].name} →
                    </a>
                  </div>
                )}
              </div>
            </Fade>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </div>
  );
}
