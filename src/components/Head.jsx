import React from "react";
import "../css/Head.css";

const Head = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row d-flex align-items-center ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a
                  className="navbar-brand d-md-block d-sm-block d-lg-none"
                  href="#"
                >
                  <img
                    src="/white-logo.png"
                    alt="Akshara Logo"
                    className="img-fluid navbar-logo"
                  />
                </a>
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
                      <a className="nav-link " href="#">
                        <i class="fa-solid fa-house me-1"></i>Home
                      </a>
                    </li>
                    <li className="nav-item  py-2 ">
                      <a className="nav-link" href="#">
                        <i className="fa-solid fa-info-circle  me-1"></i>About
                        Us
                      </a>
                    </li>
                    <li className="nav-item py-2  ">
                      <a className="nav-link" href="#">
                        <i className="fa-solid fa-graduation-cap me-1"></i>{" "}
                        Academics
                      </a>
                    </li>
                    <li className="nav-item py-2 ">
                      <a className="nav-link" href="#">
                        <i className="fa-solid fa-newspaper me-1"></i>News &
                        Activities
                      </a>
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
                          <a className="dropdown-item" href="#">
                            Service 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Service 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Service 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item py-2 ">
                      <a className="nav-link" href="#">
                        <i className="fa-solid fa-images me-1"></i> Gallery
                      </a>
                    </li>
                    <li className="nav-item  py-2 ">
                      <a className="nav-link" href="#">
                        <i className="fa-solid fa-envelope me-1 "></i>
                        Contact
                      </a>
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
                          <a className="dropdown-item" href="#">
                            <i className="fa-solid fa-download"></i> Download
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-solid fa-user-plus"></i>Apply
                            Online
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item  " href="#">
                            <i className="fa-solid fa-briefcase"></i> Carrer
                          </a>
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
