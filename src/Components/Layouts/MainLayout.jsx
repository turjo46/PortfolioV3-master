import React from "react";
import HomeBanner from "../Home/HomeBanner";
import About from "../About/About";
import ExperienceWork from "../Experience/ExperienceWork";
import Footer from "../Footer/Footer";
import Contact from "../Contract/Contact";
import Gallery from "../gallery/Gallery";

import Project from "../Event/Project";

import ScrollToTopButton from "../ScrollButton/ScrollButton";
import AutoSlidingGallery from "../../AutoSlidingGallery";

const MainLayout = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
   
      <About></About>
      <ExperienceWork></ExperienceWork>
      <Gallery></Gallery>
      <Project></Project>
      
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
      <AutoSlidingGallery/>
    </div>
  );
};

export default MainLayout;
