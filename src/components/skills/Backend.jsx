import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frameworks</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">Animations</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
          <div className="skills__data">
            <HiOutlineCheckBadge className="badge" />
            <div>
              <h3 className="skills__name">Animations</h3>
              <span className="skills__level">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
