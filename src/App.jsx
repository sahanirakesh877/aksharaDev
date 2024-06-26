import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Home from "./pages/Home";
import SideIcon from "./components/SideIcon";
import Enquiryform from "./components/Enquiryform";
// import OnlineForm from "./components/OnlineForm";
const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <SideIcon />
      <Footer />
      <Enquiryform/>

      {/* <OnlineForm /> */}
    </>
  );
};

export default App;
