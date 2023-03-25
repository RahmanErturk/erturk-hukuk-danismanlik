import React from "react";

import { Link } from "react-router-dom";
import { essays } from "../../data/data";

import "./Blog.scss";

export default function Blog() {
  const latest = essays.filter((essay) => essay.type?.includes("son"));

  const most = essays.filter((essay) => essay.type?.includes("en-cok"));

  return (
    <section id="blog">
      <div className="placeholder"></div>
      <div className="blog__headline">
        <h2>Makaleler</h2>
      </div>
      <div className="blog">
        <div className="blog__latest">
          <div className="latest__headline">
            <h2>Son Makaleler</h2>
          </div>

          <div className="latest-container">
            {latest.map((essay) => {
              return (
                <div key={essay.id} className="latest-container">
                  <div className="latest__article">
                    <div className="article__img">
                      <img src={essay.cover} />
                    </div>
                    <div className="article__info">
                      <h4>{essay.title}</h4>
                      <p className="article_content-stitle">{essay.subtitle}</p>
                      <small>{essay.date}</small>
                      <div className="info__button">
                        <Link className="info_btn-link" to={essay.link}>
                          Devamını Oku
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="blog__most">
          <div className="most__headline">
            <h3>En Çok Okunanlar</h3>
          </div>

          <div className="most__article">
            {most.map((essay) => {
              return (
                <div key={essay.id}>
                  <div className="article__content">
                    <Link className="article__content-link" to={essay.link}>
                      <h4>{essay.title}</h4>
                    </Link>
                    <p className="article_content-stitle">{essay.subtitle}</p>
                    <small>{essay.date}</small>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
