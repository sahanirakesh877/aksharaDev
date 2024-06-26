import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
// import Brand from "../components/Brand";
// import Testimonial from "../components/Testimonial";
// import Banner from "../components/Banner";
// import Contact from "../components/Contact";
// import Gallery from "../components/Gallery";
// import Footer from "../components/Footer";
// import Counter from "../components/Counter";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet titleTemplate="Akashara" />
      {/* <Counter /> */}
      {/* <Banner />
      <Gallery />
      <Footer />
      <Contact /> */}
      {/* <Testimonial/> */}
      {/* <Brand/> */}
    </>
  );
};

export default Home;
