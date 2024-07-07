import React, { useState } from "react";
import "../css/Learning.css";
import { useNavigate } from "react-router-dom";

const Learning = () => {
  const navigate = useNavigate();
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
          <div className="row  d-flex align-items-center justify-content-between">
            <div className={`col-md-4 pe-4   ${activeSection ? "d-none" : ""}`}>
              <h5 className="text-start py-1">
                Learning through LRPA approach in Akshara
              </h5>
              <p className="lrpa-text">
                We follow the LRPA model with the motto "learning through fun."
                Our approach emphasizes experiential learning, making core
                theories and values engaging. Students explore and experience
                learning beyond textbooks, fostering critical thinking and
                rational analysis through active participation. Equipped with
                modern technology, our classrooms support the use of computers,
                laptops, televisions, and projectors. Students undertake project
                works, use audio-visual and print media, and interact with
                mentors to reinforce their knowledge. 
           
              </p>

              <button className="learning-btn">
                Enrol now <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {activeSection === "senior" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Senior
                </h3>
                <p className="lrpa-text px-2">
                  Located on the main campus at Truganina, the Senior School is
                  characterised by three age-appropriate learning clusters: the
                  Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year
                  9 Program) and the Senior College for Years 10 - 12.
                  characterised by three age-appropriate learning clusters: the
                  Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year
                  9 Program) and the Senior College and the Senior College for
                  Years 10 - 12. with distinct characteristics create
                  complementary environments. The curriculum and
                </p>
                <button
                  className="learning-btn"
                  onClick={() => navigate("/academics/high")}
                >
                  Enrol now <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
            {activeSection === "middle" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  middle
                </h3>
                <p className="lrpa-text px-2">
                  the Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre
                  (Year 9 Program) Located on the main campus at Truganina, the
                  Senior School is characterised by three age-appropriate
                  learning clusters: the Horsburgh Centre (Years 7 - 8), the
                  Geoffrey Ryan Centre (Year 9 Program) and the Senior College
                  for Years 10 - 12. characterised by three age-appropriate
                  learning clusters: and the Senior College and the Senior
                  College for Years 10 - 12. with distinct characteristics
                  create complementary environments. The curriculum and
                </p>
                <button
                  className="learning-btn"
                  onClick={() => navigate("/academics/middle")}
                >
                  Enrol now <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
            {activeSection === "elementary" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Elementary School
                </h3>
                <p className="lrpa-text px-2">
                  the Senior School is characterised by three age-appropriate
                  learning clusters: the Horsburgh Centre (Years 7 - 8), the
                  Geoffrey Ryan Centre (Year 9 Program) and the Senior College
                  for Years 10 - 12. characterised by three age-appropriate
                  learning clusters: the Horsburgh Centre (Years 7 - 8), the
                  Geoffrey Ryan Centre (Year 9 Program) and the Senior College
                  and the Senior College for Years 10 - 12. with distinct
                  characteristics create complementary environments. The
                  curriculum and Located on the main campus at Truganina,
                </p>
                <button
                  className="learning-btn"
                  onClick={() => navigate("/academics/elementary")}
                >
                  Enrol now <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
            {activeSection === "kindergarten" && (
              <div className="col-md-4">
                <button onClick={handleClose} className="close-btn ">
                  <i className="fa-solid fa-xmark "></i>{" "}
                </button>
                <h3 className="border-bottom-title w-100 text-center">
                  Kindergarten
                </h3>
                <p className="lrpa-text px-2">
                  the Senior College and the Senior College for Years 10 - 12.
                  with distinct characteristics create complementary
                  environments. The curriculum and Located on the main campus at
                  Truganina, the Senior School is characterised by three
                  age-appropriate learning clusters: the Horsburgh Centre (Years
                  7 - 8), the Geoffrey Ryan Centre (Year 9 Program) and the
                  Senior College for Years 10 - 12. characterised by three
                  age-appropriate learning clusters: the Horsburgh Centre (Years
                  7 - 8), the Geoffrey Ryan Centre (Year 9 Program)
                </p>
                <button
                  className="learning-btn"
                  onClick={() => navigate("/academics/kindergarten")}
                >
                  Enrol now <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}

            {/* photos section */}
            <div className="col-md-2 ">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg "
                onClick={() => handleImageClick("senior")}
              >
                <img src="/11 big.png" alt="" className="img-custom  shadow " />
                <p className="seniors">seniors</p>
              </div>
            </div>

            <div className="col-md-2 shadow">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("middle")}
              >
                <img src="/33 medium.png" alt="" className="img-custom" />
                <p className="seniors">Middle</p>
              </div>
            </div>

            <div className="col-md-2 shadow">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("elementary")}
              >
                <img src="/1 small.png" alt="" className="img-custom" />
                <p className="seniors">Elementary School</p>
              </div>
            </div>
            <div className="col-md-2 shadow">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("kindergarten")}
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
