import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import LinkCon from "../../components/LinkCon/LinkCon";
import Title from "../../components/Title/Title";
import { essays } from "../../data/data";
import "./BlogPage.scss";

export default function BlogPage() {
  const { blogId } = useParams();

  const navigate = useNavigate();

  const essay = essays.find((essay) => essay.id === blogId);

  return (
    <div className="aboutView">
      {/* <LinkCon links={essays} /> */}
      <div className="aboutView__content">
        <button className="goBack" onClick={() => navigate(-1)}>
          Geri
        </button>
        <div className="title-img">
          <Title title={essay?.title} />
        </div>
        <div className="aboutView__content-text">{essay?.description()}</div>
      </div>
    </div>
  );
}
