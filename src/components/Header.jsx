import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container mx-auto">
          <a href="#" className="text-decoration-none">
            <img
              src="./akasharalogo.png"
              alt="Akshara School"
              className="d-none"
              style={{ maxWidth: "160px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <a
                  className="nav-link   text-decoration-none "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-decoration-none " href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Academics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Admission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News & Activities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Header;
