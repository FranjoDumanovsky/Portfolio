import React from "react";

import "./project.css";
import { BsGithub } from "react-icons/bs";
import img3 from "../../../assets/work/mockupReve.png";
// import img from "../../assets/work/mockupHotelZagreb.jpeg";
// import img2 from "../../assets/work/mockupHotelZagreb.jpeg";

const Project = (props) => {
  return (
    <div>
      <div className="item">
        <div className="left">
          <div className="img">
            <img src={img3} alt="project" />
          </div>
        </div>
        <div className="right">
          <h3 className="project-title">{props.projectTitle}</h3>
          <h4 className="project-sub-title">{props.projectSubTitle}</h4>
          <p className="project-desc">{props.projectDescription}</p>
          <div className="project-buttons">
            <a
              href="https://reve-dostava.com/index.html"
              rel="noreferrer"
              target="_blank"
              className="button"
            >
              Visit Page
            </a>
            <a
              href="https://github.com/Quelorel/Reve-dostava-Website"
              target="_blank"
              rel="noreferrer"
              className="button button--flex"
            >
              Code
              <BsGithub className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
