import React from "react";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a href="/" className="footer__social-link" target="_blank">
            <BsLinkedin />
          </a>
          <a href="/" className="footer__social-link" target="_blank">
            <BsGithub />
          </a>
          <a href="/" className="footer__social-link" target="_blank">
            <BsEnvelope />
          </a>
        </div>

        <div className="footer__tag-line">
          <h4>In search of frontend developer?</h4>
        </div>
        <a href="mailto:franjodumanovsky@gmail.com">
          <div className="footer__cta-wrapper">
            <h1>
              <span data-content="LET'S TALK" aria-hidden="true"></span>
              LET&apos;S TALK
            </h1>
            <h1 className="h1-footer-arrow">
              <span data-content="→" aria-hidden="true"></span>→
            </h1>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default footer;
