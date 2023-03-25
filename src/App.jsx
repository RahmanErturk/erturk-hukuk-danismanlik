import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Team from "./views/Team/Team";
import TeamMember from "./views/TeamMember/TeamMember";
import Services from "./components/Servicees/Services";
import ServicePage from "./views/ServicePage/ServicePage";
import BlogLatest from "./views/BlogLatest/BlogLatest";
import BlogPage from "./views/BlogPage/BlogPage";
import BlogMost from "./views/BlogMost/BlogMost";
import BlogAll from "./views/BlogAll/BlogAll";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/ekibimiz" element={<Team />} />
          <Route path="/ekibimiz/:teamId" element={<TeamMember />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
          <Route path="/hizmetlerimiz/:serviceId" element={<ServicePage />} />
          <Route path="/blog" element={<BlogAll />} />
          <Route path="/blog/son-makaleler" element={<BlogLatest />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/blog/cok-okunanlar" element={<BlogMost />} />
          <Route path="/blog/cok-okunanlar/:blogId" element={<BlogPage />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
