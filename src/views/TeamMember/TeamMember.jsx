import React from "react";

import { useParams } from "react-router-dom";

import LinkCon from "../../components/LinkCon/LinkCon";
import Title from "../../components/Title/Title";
import { team } from "../../data/data";
import "./TeamMember.scss";

export default function TeamMember() {
  const { teamId } = useParams();

  const teamMember = team.find((member) => member.link.includes(teamId));

  return (
    <div className="aboutView">
      <LinkCon links={team} />
      <div className="aboutView__content">
        <div className="title-img">
          <Title title={teamMember.title} />
          <div className="image">
            <img src={teamMember.image} alt="" />
          </div>
        </div>
        <div className="aboutView__content-text">
          {teamMember.description()}
        </div>
      </div>
    </div>
  );
}
