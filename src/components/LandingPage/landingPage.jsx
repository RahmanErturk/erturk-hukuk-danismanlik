import React from "react";

import "./landingPage.scss";

export default function landingPage() {
  return (
    <div className="main">
      <section id="home">
        <div className="home__content">
          <div className="home__headline">
            <h1 className="headline__main-title">
              ErtürK Hukuk ve Danışmanlık
            </h1>
            <h3 className="headline__under-title">Av. Resul Ertürk</h3>
          </div>
          <div className="home__text">
            <p>
              Avukatlık bir demokrasinin olmazsa olmazlarından olan savunma
              hakkının temelidir. Kutsal bir kamu hizmeti olarak kamu vicdanı ve
              adaletin sağlanmasının teminatidir.
            </p>
          </div>
        </div>
        <div className="buttons">
          <a href="#iletisim">
            <button type="submit">Avukata Sor</button>
          </a>

          <a href="#hakkimizda">
            <i className="fa-solid fa-angles-down"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
