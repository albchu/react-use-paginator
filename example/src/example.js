import React from "react";
import "./example.css";

const Example = ({ title, children }) => {
  return (
    <div>
      <div className="example__title">Simple Usage</div>
      <div className="example__body">{children}</div>
    </div>
  );
};

export default Example;
