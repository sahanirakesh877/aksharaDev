import React from "react";
import "../css/Head.css";
import { Link } from "react-router-dom";

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
                        <i class="fa-solid fa-house me-1"></i>Home
                      </Link>
                    </li>
                    <li className="nav-item  py-2 ">
                      <Link className="nav-link" to="/about">
                        <i className="fa-solid fa-info-circle  me-1"></i>About
                        Us
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
                        <i className="  fa-solid fa-graduation-cap me-1"></i>
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
                        <Link className="dropdown-item" to="/academics/middle">
                            Middle School
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/academics/elementary">
                            Elementary School
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
                        <i className="fa-solid fa-user-graduate me-1"></i>
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
                        <Link className="dropdown-item" to="/admission/policy">
                            Admission Policy
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/admission/apply">
                            Apply Online Form
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item py-2 ">
                    <Link className="nav-link" to="/news">
                        <i className="fa-solid fa-newspaper me-1"></i>News & Activities
                      </Link>
                    </li>

                    <li className="nav-item py-2 ">
                    <Link className="nav-link" to="/gallery">
                        <i className="fa-solid fa-images me-1"></i>Gallery
                      </Link>
                    </li>
                    <li className="nav-item  py-2 ">
                    <Link className="nav-link" to="/contact">
                        <i className="fa-solid fa-envelope me-1"></i>Contact
                      </Link>
                    </li>

                    <li className="nav-item dropdown  flex-row  py-2 ">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-bars"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                        <Link className="dropdown-item" to="/downloads">
                            <i className="fa-solid fa-download"></i>Download
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/apply-online">
                            <i className="fa-solid fa-user-plus"></i>Apply Online
                          </Link>
                        </li>
                        <li>
                        <Link className="dropdown-item" to="/career">
                            <i className="fa-solid fa-briefcase"></i>Career
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <button className="btn   rounded-pill   bg-danger text-white animated-button">
                    Get inquiry
                  </button>
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
