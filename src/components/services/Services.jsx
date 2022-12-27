/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import "./services.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <h3 className="services__title">Frontend</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Frontend</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <h3 className="services__title">Backend</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Backend</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <h3 className="services__title">Animations</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <AiOutlineClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Animations</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p className="services__modal-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
