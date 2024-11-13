import React from "react";
import HomeBanner from "../Home/HomeBanner";
import About from "../About/About";
import ExperienceWork from "../Experience/ExperienceWork";
import Footer from "../Footer/Footer";
import Contact from "../Contract/Contact";


import Project from "../Event/Project";

import ScrollToTopButton from "../ScrollButton/ScrollButton";
import Gallery from "../gallery/Gallery";
import AutoSlidingGallery from "../../AutoSlidingGallery";


const MainLayout = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
   
      <About></About>
      <ExperienceWork></ExperienceWork>
      
      <Project></Project>
      
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
      
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Gallery />
        </div>
    </div>
  );
};

export default MainLayout;
