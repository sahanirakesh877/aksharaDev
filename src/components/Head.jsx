import React from "react";
import "../css/Head.css";
import { Link } from "react-router-dom";
import EnquiryModel from "./EnquiryModel";


const Head = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row d-flex align-items-center ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link
                  className="navbar-brand d-md-block d-sm-block d-lg-none"
                  to="/"
                >
                  <img
                    src="/white-logo.png"
                    alt="Akshara Logo"
                    className="img-fluid navbar-logo"
                  />
                </Link>
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {/* <span className="navbar-toggler-icon " /> */}
                  <span className="navbar-toggler-icons ">
                    <i class="fa-solid fa-bars"></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav mx-auto   ">
                    <li className="nav-item active  py-2 ">
                      <Link className="nav-link " to="/">
                       Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown  py-2 ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                   
                        AboutUs
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                        <Link className="dropdown-item" to="/about">
                          Introduction
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/about/philosphy">
                       Our Philosphy and Akshara Learning Principles
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/about/msg-chairman">
                           Message From Chairmain
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/about/msg-principal">
                        Message From Principal
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/about/team">
                        Team
                          </Link>
                        </li>
                      
                       
                      </ul>
                    </li>

                    <li className="nav-item dropdown  py-2 ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                     
                        Academic
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                        <Link className="dropdown-item" to="/academics/kindergarten">
                            Kindergarten
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/academics/elementary">
                            Elementary School
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/academics/middle">
                            Middle School
                          </Link>
                        </li>
                      
                        <li>
                        <Link className="dropdown-item" to="/academics/high">
                            High School
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown  py-2 ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                    
                        Admission
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                        <Link className="dropdown-item" to="/admission/policy">
                            Admission Policy
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/admission/procedure">
                            Admission Procedure
                          </Link>
                        </li>
                     
                      </ul>
                    </li>

                    <li className="nav-item py-2 ">
                    <Link className="nav-link" to="/news">
                       News & Activities
                      </Link>
                    </li>

                    <li className="nav-item py-2 ">
                    <Link className="nav-link" to="/gallery">
                     Gallery
                      </Link>
                    </li>

                    <li className="nav-item  py-2 ">
                    <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>

                    <li className="nav-item dropdown  flex-row  py-2  ">
                    
                      <a
                        className="nav-link dropdown-toggle  "
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-bars "></i>
                       
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                        <Link className="dropdown-item" to="/downloads">
                            <i className="fa-solid fa-download me-1"></i>Download
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/apply-online">
                            <i className="fa-solid fa-user-plus me-1"></i>Apply Online
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/career">
                            <i className="fa-solid fa-briefcase me-1"></i>Career
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="  py-2  ms-md-4 ">
                   <button className="head-btn    rounded-pill animated-button ">Get Started</button>
                    </li>
                   
                  </ul>
               

                  <EnquiryModel/>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
