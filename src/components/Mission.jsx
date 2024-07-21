import React from 'react'
import "../css/mission.css"

const Mission = () => {
  return (
    <>
        <div className="mission-colo py-5">
        {/* <div className="mission-color"> */}
        <div className="container">
        <div className="row d-flex align-items-stretch py-4">
            <div className="col-md-4 d-flex border-end">
              <div className=" text-center d-flex flex-column justify-content-start w-100 custom-border">
                <i
                  className="fas fa-bullseye about-icon1 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center mission-head">OUR MISSION</h4>
                <p className="mission-p">
                  Aksharaa School inculcates value-based education with academic
                  excellence through collaboration with parents and other
                  stakeholders to instill resilience, leadership skills, and
                  emotional intelligence in each learner.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex border-end ">
              <div className="text-center d-flex flex-column justify-content-start w-100">
                <i
                  className="fas fa-eye about-icon2 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center">OUR VISION</h4>
                <p className="mission-p">
                  Nurturing young learners to become lifelong learners globally
                  competent and responsible citizens.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="text-center d-flex flex-column justify-content-start w-100">
                <i
                  className="fas fa-heart about-icon3 mb-2 py-2"
                  style={{ fontSize: "3em" }}
                ></i>
                <h4 className="text-center">OUR VALUES</h4>
                <p className="mission-p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Esse, ullam. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias, sequi?
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Mission
