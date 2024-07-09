
// import React, { useState } from "react";
// import "../css/Learning.css";
// import { useNavigate } from "react-router-dom";

// const Learning = () => {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState(null);

//   const handleImageClick = (section) => {
//     setActiveSection(section);
//   };

//   const handleClose = () => {
//     setActiveSection(null);
//   };

//   return (
//     <>
//       <div className="learning">
//         <div className="container">
//           <div className="row  d-flex align-items-center justify-content-between  fuche-sec">
//             <div className={`col-md-4 pe-4   ${activeSection ? "d-none" : ""}`}>
//               <h2 className="fw-semibold sanskar">संस्कारयुक्त शिक्षा</h2>

//               <p className="lrpa-text">
//                 "Sanskaryukta Siksha" is fundamental at our school.The School on
//                 its dynamic framework builds on and offers students a repertoire
//                 of ECAs made integral with the mainstream academic endeavors we
//                 engage students throughout. Some key ECAs that Aksharaa offers
//                 on school days.
//               </p>
//               <h5 className="text-start fw-semibold ">
//                 Learning through LRPA approach in Akshara
//               </h5>
//               <p className="lrpa-text">
//                 We follow the LRPA model with the motto "learning through fun."
//                 Our approach emphasizes experiential learning, making core
//                 theories and values engaging. Students explore and experience
//                 learning beyond textbooks, fostering critical thinking and
//                 rational analysis through active participation. Equipped with
//                 modern technology, our classrooms support the use of computers,
//                 laptops, televisions, and projectors. Students undertake project
//                 works, use audio-visual and print media, and interact with
//                 mentors to reinforce their knowledge.
//               </p>
//               <button
//                 class="button-21"
//                 role="button"
//                 onClick={() => {
//                   navigate("/about/lrpa");
//                 }}
//               >
//                 Read More<i class="fa-solid fa-arrow-right ms-2"></i>
//               </button>
//             </div>

//             {activeSection === "senior" && (
//               <div className="col-md-4">
//                 <button onClick={handleClose} className="close-btn ">
//                   <i className="fa-solid fa-xmark "></i>{" "}
//                 </button>
//                 <h3 className="border-bottom-title w-100 text-center">
//                   Senior
//                 </h3>
//                 <p className="lrpa-text px-2">
//                   Located on the main campus at Truganina, the Senior School is
//                   characterised by three age-appropriate learning clusters: the
//                   Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year
//                   9 Program) and the Senior College for Years 10 - 12.
//                   characterised by three age-appropriate learning clusters: the
//                   Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre (Year
//                   9 Program) and the Senior College and the Senior College for
//                   Years 10 - 12. with distinct characteristics create
//                   complementary environments. The curriculum and
//                 </p>
//                 <button
//                   className="button-21"
//                   role="button"
//                   onClick={() => navigate("/academics/high")}
//                 >
//                   Enrol now <i class="fa-solid fa-arrow-right"></i>
//                 </button>
//               </div>
//             )}
//             {activeSection === "middle" && (
//               <div className="col-md-4">
//                 <button onClick={handleClose} className="close-btn ">
//                   <i className="fa-solid fa-xmark "></i>{" "}
//                 </button>
//                 <h3 className="border-bottom-title w-100 text-center">
//                   middle
//                 </h3>
//                 <p className="lrpa-text px-2">
//                   the Horsburgh Centre (Years 7 - 8), the Geoffrey Ryan Centre
//                   (Year 9 Program) Located on the main campus at Truganina, the
//                   Senior School is characterised by three age-appropriate
//                   learning clusters: the Horsburgh Centre (Years 7 - 8), the
//                   Geoffrey Ryan Centre (Year 9 Program) and the Senior College
//                   for Years 10 - 12. characterised by three age-appropriate
//                   learning clusters: and the Senior College and the Senior
//                   College for Years 10 - 12. with distinct characteristics
//                   create complementary environments. The curriculum and
//                 </p>
//                 <button
//                   className="button-21"
//                   role="button"
//                   onClick={() => navigate("/academics/middle")}
//                 >
//                   Enrol now <i class="fa-solid fa-arrow-right"></i>
//                 </button>
//               </div>
//             )}
//             {activeSection === "elementary" && (
//               <div className="col-md-4">
//                 <button onClick={handleClose} className="close-btn ">
//                   <i className="fa-solid fa-xmark "></i>{" "}
//                 </button>
//                 <h3 className="border-bottom-title w-100 text-center">
//                   Elementary School
//                 </h3>
//                 <p className="lrpa-text px-2">
//                   the Senior School is characterised by three age-appropriate
//                   learning clusters: the Horsburgh Centre (Years 7 - 8), the
//                   Geoffrey Ryan Centre (Year 9 Program) and the Senior College
//                   for Years 10 - 12. characterised by three age-appropriate
//                   learning clusters: the Horsburgh Centre (Years 7 - 8), the
//                   Geoffrey Ryan Centre (Year 9 Program) and the Senior College
//                   and the Senior College for Years 10 - 12. with distinct
//                   characteristics create complementary environments. The
//                   curriculum and Located on the main campus at Truganina,
//                 </p>
//                 <button
//                   className="button-21"
//                   role="button"
//                   onClick={() => navigate("/academics/elementary")}
//                 >
//                   Enrol now <i class="fa-solid fa-arrow-right"></i>
//                 </button>
//               </div>
//             )}
//             {activeSection === "kindergarten" && (
//               <div className="col-md-4">
//                 <button onClick={handleClose} className="close-btn ">
//                   <i className="fa-solid fa-xmark "></i>{" "}
//                 </button>
//                 <h3 className="border-bottom-title w-100 text-center">
//                   Kindergarten
//                 </h3>
//                 <p className="lrpa-text px-2">
//                   the Senior College and the Senior College for Years 10 - 12.
//                   with distinct characteristics create complementary
//                   environments. The curriculum and Located on the main campus at
//                   Truganina, the Senior School is characterised by three
//                   age-appropriate learning clusters: the Horsburgh Centre (Years
//                   7 - 8), the Geoffrey Ryan Centre (Year 9 Program) and the
//                   Senior College for Years 10 - 12. characterised by three
//                   age-appropriate learning clusters: the Horsburgh Centre (Years
//                   7 - 8), the Geoffrey Ryan Centre (Year 9 Program)
//                 </p>
//                 <button
//                   className="button-21"
//                   role="button"
//                   onClick={() => navigate("/academics/kindergarten")}
//                 >
//                   Enrol now <i class="fa-solid fa-arrow-right"></i>
//                 </button>
//               </div>
//             )}

//             {/* photos section */}
//             <div className="col-md-2  border   rotatediv">
//               <div
//                 className="row d-flex justify-content-between align-items-center position-relative learnimg  "
//                 onClick={() => handleImageClick("senior")}
               


//               >
//               <div className="inner-content">
//                 <img src="/alternate/senior.png" alt="" className="img-custom   " />
//                 <p className="seniors">seniors</p>
//               </div>
//               </div>
//             </div>

//             <div className="col-md-2  border rotatediv">
//               <div
//                 className="row d-flex justify-content-between align-items-center  position-relative learnimg"
//                 onClick={() => handleImageClick("middle")}
//               >
//               <div className="inner-content">
//                 <img src="/alternate/girl1.png" alt="" className="img-custom" />
//                 <p className="seniors">Middle</p>
//               </div>
//               </div>
//             </div>

//             <div className="col-md-2  border rotatediv">
//               <div
//                 className="row d-flex justify-content-between align-items-center  position-relative learnimg"
//                 onClick={() => handleImageClick("elementary")}
//               >
//               <div className="inner-content">

            
//                 <img src="/alternate/girl2.png" alt="" className="img-custom" />
//                 <p className="seniors">Elementary School</p>
//               </div>
//               </div>
//             </div>


//             <div className="col-md-2  border rotatediv">
//               <div
//                 className="row d-flex justify-content-between align-items-center  position-relative learnimg"
//                 onClick={() => handleImageClick("kindergarten")}
//               >
//               <div className="inner-content">

              
//                 <img src="/alternate/kindergarten.png" alt="" className="img-custom" />
//                 <p className="seniors">Kindergarten</p>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Learning;



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
          <div className="row  d-flex align-items-center justify-content-between  fuche-sec">
            <div className={`col-md-4 pe-4   ${activeSection ? "d-none" : ""}`}>
              <h2 className="fw-semibold sanskar">संस्कारयुक्त शिक्षा</h2>

              <p className="lrpa-text">
                "Sanskaryukta Siksha" is fundamental at our school.The School on
                its dynamic framework builds on and offers students a repertoire
                of ECAs made integral with the mainstream academic endeavors we
                engage students throughout. Some key ECAs that Aksharaa offers
                on school days.
              </p>
              <h5 className="text-start fw-semibold ">
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
              <button
                class="button-21"
                role="button"
                onClick={() => {
                  navigate("/about/lrpa");
                }}
              >
                Read More<i class="fa-solid fa-arrow-right ms-2"></i>
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
                  className="button-21"
                  role="button"
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
                  className="button-21"
                  role="button"
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
                  className="button-21"
                  role="button"
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
                  className="button-21"
                  role="button"
                  onClick={() => navigate("/academics/kindergarten")}
                >
                  Enrol now <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}

            {/* photos section */}
            <div className="col-md-2   rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center position-relative learnimg  "
                onClick={() => handleImageClick("senior")}
               


              >
              <div className="inner-content">
                <img src="/alternate/senior.png" alt="" className="img-custom   " />
                <p className="seniors">seniors</p>
              </div>
              </div>
            </div>

            <div className="col-md-2  rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("middle")}
              >
              <div className="inner-content">
                <img src="/alternate/girl1.png" alt="" className="img-custom kinder_img2" />
                <p className="seniors">Middle</p>
              </div>
              </div>
            </div>

            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("elementary")}
              >
              <div className="inner-content">

            
                <img src="/alternate/girl2.png" alt="" className="img-custom kinder_img1" />
                <p className="seniors pe-4">Elementary School</p>
              </div>
              </div>
            </div>


            <div className="col-md-2 rotatediv">
              <div
                className="row d-flex justify-content-between align-items-center  position-relative learnimg"
                onClick={() => handleImageClick("kindergarten")}
              >
              <div className="inner-content">

              
                <img src="/alternate/kindergarten.png" alt="" className="img-custom  kinder_img" />
                <p className="seniors">Kindergarten</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
