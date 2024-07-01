import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="container-fluid d-none d-lg-block ">
        <div className="row d-flex  justify-content-center border align-items-center py-2 px-xl-5">
          <div className="col-md-3">
            <a href="#" className="text-decoration-none">
              <img
                src="./akasharalogo.png"
                alt="Akshara School"
                style={{ maxWidth: "160px" ,maxHeight:"100px"}}
              />
            </a>
          </div>
          <div className=" col-md-9">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-4 d-flex align-items-center mb-2 mb-lg-0">
                <div className=" d-flex  align-items-center gap-2 ">
                  <i className="fas fa-map-marker-alt fs-5 top-icon   "></i>
                  <div className="d-flex flex-column align-items-start ">
                    <h6 className="top-head mb-0">Our Office</h6>
                    <small className="top-p">
                      Kandaghari, Kageshwori Manohara 9
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center mb-2 mb-lg-0">
                <div className=" d-flex  align-items-center gap-2 ">
                  <i className="fas fa-envelope fs-5  top-icon "></i>
                  <div className="d-flex flex-column align-items-start ">
                    <h6 className="top-head mb-0">Email Us</h6>
                    <small className="top-p">info@aksharaaschool.edu.np</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className=" d-flex  align-items-center gap-2">
                  <i className="fas fa-phone fs-5  top-icon "></i>
                  <div className="d-flex flex-column align-items-start ">
                    <h6 className="top-head mb-0">Call Us</h6>
                    <small className="top-p">+977-01-4993031/32/33</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex align-items-center">
                <div className="d-flex gap-1">
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-facebook   icon "></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-instagram   icon"></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-whatsapp   icon"></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-youtube   icon"></i>
                  </a>
                  <a href="#" className="text-decoration-none head-icons">
                    <i className="fa-brands fa-linkedin   icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
