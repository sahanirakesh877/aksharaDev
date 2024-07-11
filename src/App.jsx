import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Head from "./components/Head";
import About from "./pages/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Kindegarten from "./pages/Kindergarten";
 import SideIcon from "./components/SideIcon";
import Contact from "./pages/Contact";
// import Gallery from "./components/Gallery";
// import Gallery from "./pages/Gallery";
import Elementryschool from "./pages/Elementryschool";
import Highschool from "./pages/Highschool";
import Middleschool from "./pages/Middleschool";
import Admissionpolicy from "./pages/Admissionpolicy";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import Photos from './components/Photos';
import ApplyOnline from "./pages/ApplyOnline";
import ChairmanMsg from './components/ChairmanMsg';
import Principalmsg from "./components/Principalmsg";
import LRPA from "./pages/LRPA";
import Gallery from "./pages/Gallery";
const App = () => {
  return (
    <>
  
      <TopBar />
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* academics-pages  start*/}
        <Route path="/academics/kindergarten" element={<Kindegarten />} />
        <Route path="/academics/elementary" element={<Elementryschool />} />
        <Route path="/academics/middle" element={<Middleschool />} />
        <Route path="/academics/high" element={<Highschool />} />
        {/* academics-pages  end*/}


        {/* admission page start */}
        <Route path="/admission/policy" element={<Admissionpolicy />} />
        <Route path="/admission/procedure" element={<AdmissionProcedure />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
        {/* admission page end */}


        {/* about page start */}
       
        <Route path="/about/chairman" element={<ChairmanMsg/>} />
        <Route path="/about/principal" element={<Principalmsg />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/lrpa" element={<LRPA />} />
         {/* about page end */}


        <Route path="/news" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Photos />} />
        <Route path="/photo" element={<Gallery/>} />

      </Routes>
      <SideIcon />
      <Footer />

     
    </>
  );
};

export default App;
