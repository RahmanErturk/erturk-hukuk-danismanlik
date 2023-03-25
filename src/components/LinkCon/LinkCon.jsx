import React from "react";

import { Link } from "react-router-dom";

import "./LinkCon.scss";

export default function LinkCon({ links }) {
  return (
    <div className="link-container">
      {links.map((link, i) => (
        <Link key={i} className="link" to={link.link}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
