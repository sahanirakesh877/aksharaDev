import React, { useState } from "react";
import "../css/Learning.css";

const Learning = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleImageClick = (section) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <>
      <div className="learning">
        <div className="container">
          <div className="row  d-flex align-items-center">
            <div className={`col-md-6 ${activeSection ? "d-none" : ""}`}>
              <h3>Learning through LRPA approach in Akshara</h3>
              <p>
                Igniting a hunger for learning, unlocking creativity and
                exploring the concepts of global thinking form the basis of our
                daily purpose. Learning at Westbourne is sequenced and from our
                early learners through to Year 12, Westbourne students are
                encouraged to pursue excellence in everything they do.
              </p>


              <button className="learning-btn">
                Enrol now <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {activeSection === "senior" && (
              <div className="col-md-6">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3>Senior</h3>
                <p>
                  Located on the main campus at Truganina, the Senior School is
                  characterised by three age-appropriate learning clusters: the
                  Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year
                  9 Program) and the Senior College for Years 10 - 12.
                </p>
                <button className="learning-btn">
                Enrol now <i class="fa-solid fa-arrow-right"></i>
              </button>
              </div>
            )}

            {activeSection === "junior" && (
              <div className="col-md-6">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3>Junior</h3>
                <p>
                  Two campuses with distinct characteristics create a unique
                  introduction to the Westbourne Junior School. Prep - Year 3 at
                  the Williamstown campus and Prep - Year 6 at the Truganina
                  campus provide complementary environments. The curriculum and
                  educational philosophy apply consistently in both locations
                  whilst the unique geographical landscapes deliver diverse
                  opportunities for learning.
                </p>
                <button className="learning-btn">
                Enrol now <i class="fa-solid fa-arrow-right"></i>
              </button>
              </div>
            )}

            {activeSection === "early" && (
              <div className="col-md-6">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3>Early</h3>
                <p>
                  Akshara Grammar’s purpose-built Amici Early Learning Centre
                  and adjacent Winjeel (P - 2) provide stimulating and engaging
                  environments and curriculum underpinned by the Reggio Emilia
                  approach. By adopting a variety of inquiry-based situations,
                  thoughtful provocations, teacher-child collaborations,
                  sustained conversations and listening to the child, a powerful
                  learning environment is created.
                </p>
                <button className="learning-btn">
                Enrol now <i class="fa-solid fa-arrow-right"></i>
              </button>

              </div>
            )}

            <div className="col-md-2 ">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg "
                onClick={() => handleImageClick("senior")}
              >
                <img
                  src="/11 big.png"
                  alt=""
                  className="img-custom  shadow "
                />
                <p className="seniors">seniors</p>
              </div>
            </div>

            <div className="col-md-2 shadow">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("junior")}
              >
                <img src="/33 medium.png" alt="" className="img-custom" />
                <p className="seniors">Middle</p>
              </div>
            </div>

            <div className="col-md-2 shadow">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("early")}
              >
                <img src="/1 small.png" alt="" className="img-custom" />
                <p className="seniors">Kindergarten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
