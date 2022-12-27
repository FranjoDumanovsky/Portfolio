/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="section__qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <BsFillBriefcaseFill className="qualification__icon" />
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design2</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"> </span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle"> Zagreb</span>
                <div className="qualification__calender">
                  <BsCalendar3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
