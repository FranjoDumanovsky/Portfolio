import React from "react";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

const Social = () => {
  return (
    <div className="home__social">
      <a href="/" className="home__social-icon" target="_blank">
        <BsLinkedin />
      </a>
      <a href="/" className="home__social-icon" target="_blank">
        <BsGithub />
      </a>
      <a href="/" className="home__social-icon" target="_blank">
        <BsEnvelope />
      </a>
    </div>
  );
};

export default Social;
