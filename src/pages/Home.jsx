import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Learning from "../components/Learning";
  import Blog from "./Blog";
// import Enquiryform from "../components/Enquiryform";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Counter from "../components/Counter";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet titleTemplate="Akashara" />
      <Banner />
      <Brand />
      <Learning/>
      <Counter />
     
    
    
      {/* <Enquiryform /> */}
      <Blog/> 
      <Testimonial />
      <Contact />
      <Gallery />
      
     
    </>
  );
};

export default Home;
