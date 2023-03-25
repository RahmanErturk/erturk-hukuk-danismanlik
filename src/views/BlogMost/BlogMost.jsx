import React from "react";

import { Link } from "react-router-dom";

import LinkCon from "../../components/LinkCon/LinkCon";
import Title from "../../components/Title/Title";
import { blogLinks, essays } from "../../data/data";
import "./BlogMost.scss";

export default function BlogLatest() {
  const most = essays.filter((essay) => essay.type?.includes("en-cok"));

  return (
    <div className="aboutView">
      <LinkCon links={blogLinks} />
      <div className="aboutView__content">
        <Title title="En Çok Okunanlar" />
        <div className="team__content blog_content">
          {most.map((essay) => {
            return (
              <Link
                to={`${essay.link}`}
                key={essay.id}
                className="team__content-card blog_card"
              >
                <div className="team__content-card__img blog_img">
                  <img src={essay.cover} />
                </div>
                <div className="team__content-card__content blog_card_content">
                  <p className="card__content-title blogAll_title">
                    {essay.title}
                  </p>
                  <p className="card__content-subtitle blogAll_stitle">
                    {essay.subtitle}
                  </p>
                  <p className="blog_date">{essay.date}</p>
                  <p className="card__content-text blogAll_text">
                    {essay.explanation}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
