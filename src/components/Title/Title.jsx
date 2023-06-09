import React from "react";

import "./Title.scss";

export default function Title({ title }) {
  return (
    <div className="title-container">
      <h1>{title}</h1>
    </div>
  );
}
