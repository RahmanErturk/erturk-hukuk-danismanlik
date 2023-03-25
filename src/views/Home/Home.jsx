import React from "react";

import LandingPage from "../../components/LandingPage/landingPage";
import About from "../../components/About/About";
import Services from "../../components/Servicees/Services";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <Services />
      <Blog />
      <Contact />
    </div>
  );
}
