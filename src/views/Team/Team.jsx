import React from "react";

import { Link } from "react-router-dom";

import LinkCon from "../../components/LinkCon/LinkCon";
import Title from "../../components/Title/Title";
import { aboutLinks, team } from "../../data/data";
import "./Team.scss";

export default function Team() {
  return (
    <div className="aboutView">
      <LinkCon links={aboutLinks} />
      <div className="aboutView__content">
        <Title title="Ekibimiz" />
        <div className="team__content">
          {team.map((member) => {
            return (
              <Link
                to={`${member.link}`}
                key={member.id}
                className="team__content-card"
              >
                <div className="team__content-card__img">
                  <img src={member.cover} />
                </div>
                <div className="team__content-card__content">
                  <p className="card__content-title">{member.title}</p>
                  <p className="card__content-subtitle">{member.subtitle}</p>
                  <p className="card__content-text">{member.explanation}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
