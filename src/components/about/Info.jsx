import React from "react";

import { FiAward } from "react-icons/fi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FiAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      <div className="about__box">
        <FiAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      <div className="about__box">
        <FiAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>
    </div>
  );
};

export default Info;
