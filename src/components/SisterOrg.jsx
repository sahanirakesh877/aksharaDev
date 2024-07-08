import React from "react";
import "../css/Sister.css";

const SisterOrg = () => {
  return (
    <>
      <div className="sis ">
        <div className="container">
          <div className="row py-4 border d-flex align-items-center justify-content-center">
            <div className="col-md-12 ">
            <h2 className="text-center    text-dark border-bottom-title w-100">Sister Organization</h2>
              <div className="poster">
                <img
                  src="/sisremove.png"
                  alt="sister organization..."
                  className="img-fluid"
                />
                <span className="text-center">
                  Jawlakhel, Lalitpur, Nepal
                  <br />
                  01-5426371
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SisterOrg;
