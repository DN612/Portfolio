import React from "react";
import { GiBrain } from "react-icons/gi";
import { DiGoogleAnalytics } from "react-icons/di";
import { FcParallelTasks } from "react-icons/fc";
import "../css/projects.css"

const Projects = (props) => {
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var icons = [
      { icon: <GiBrain className="commonIcons" /> },
      { icon: <DiGoogleAnalytics className="commonIcons" /> },
      { icon: <FcParallelTasks className="commonIcons" /> },
    ];
    var state = props.data.project.map(function (inf, index) {
      return (
        <div key={inf.id} className="col-4">
          <div className="projects__box">
            <div className="row">
              <span>{icons[index].icon}<div className="projects__box-header">{inf.heading}</div></span>
              
            </div>
            <div className="projects__box-title">{inf.title}</div>
            <div className="projects__box-p">{inf.text}</div>
            {inf.link &&
              <p className="customlink">
                <a href={inf.link} className="projectlink" target="_blank" rel="noopener noreferrer">Click Here for More</a>
              </p>
            }
          </div>
        </div>
      );
    });
  }

  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h1 className="mainHeader">{subHeading}</h1>
            <p className="mainContent">{text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row">
            {state}
            <div className="header__buttons">
              <a
                href="https://github.com/DN612"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
