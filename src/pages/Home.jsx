import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
 import Banner from "../components/Banner";
// import Contact from "../components/Contact";
// import Gallery from "../components/Gallery";
// import Counter from "../components/Counter";
// import Footer from "../components/Footer";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet titleTemplate="Akashara" />
    
      <Banner/>
        {/* <Counter />
      <Gallery/>
      
      <Footer/> */}
      {/* <Contact/> */}
    

  
    </>
  );
};

export default Home;
