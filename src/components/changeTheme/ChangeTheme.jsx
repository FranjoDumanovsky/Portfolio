/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "./changeTheme.css";

export default function changeTheme(props) {
  return (
    <div className="">
      <div
        className="theme-btn"
        onClick={() => {
          props.changeTheme();
        }}
      ></div>
    </div>
  );
}
