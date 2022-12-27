import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
