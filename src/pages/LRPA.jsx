import React, { useState } from "react";
import "../css/Learning.css";

const LRPA = () => {
  const [centerText, setCenterText] = useState("Hover over an image");

  const handleMouseEnter = (text) => {
    setCenterText(
      <div className="border">
        {text}
      </div>
    );
  };

  const handleMouseLeave = () => {
    setCenterText("Hover over an image");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="text-center border-bottom-title pt-3">
            Learn Through LRPA
          </h4>
          <p className="text-start pt-4">
            We follow the LRPA model with the motto "learning through fun." Our
            approach emphasizes experiential learning, making core theories and
            values engaging. Students explore and experience learning beyond
            textbooks, fostering critical thinking and rational analysis through
            active participation. Equipped with modern technology, our
            classrooms support the use of computers, laptops, televisions, and
            projectors. Students undertake project works, use audio-visual and
            print media, and interact with mentors to reinforce their knowledge.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="corner-image-container bg-light">
            <div
              className="image-wrapper top-left"
              onMouseEnter={() => handleMouseEnter(
                <>
                  <h4 className="border-bottom-title w-100 py-2" >Continuous Assessment</h4>
                  <p className="lrpamid-p">
                    Appropriate assessment of each task is done to monitor a
                    child's skill of manipulation of words, materials, ideas,
                    concepts. Such assessments help to notice whether the child
                    has acquired language, mathematical, and social skills or
                    not. This is done on a day-to-day basis through the use of
                    CAS book.
                  </p>
                </>
              )}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner1.jpg" alt="Continuous Assessment" />
            </div>
            <div
              className="image-wrapper top-right"
              onMouseEnter={() => handleMouseEnter(
                <>
                  <h4 className="border-bottom-title w-100 py-2">
                    Active Observation and Recording
                  </h4>
                  <p className="lrpamid-p">
                    Through intra and outside classroom activities, students'
                    knowledge level, learning skills, extent of participation,
                    research work, interest, psychomotor skills, etc. are
                    observed and recorded using specific criteria. Such
                    observation helps to monitor the overall development of a
                    child.
                  </p>
                </>
              )}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner2.jpg" alt="Active Observation and Recording" />
            </div>
            <div
              className="image-wrapper bottom-left"
              onMouseEnter={() => handleMouseEnter(
                <>
                  <h4 className="border-bottom-title w-100 py-2">Assignment</h4>
                  <p className="lrpamid-p">
                    Age-appropriate specific assignments are assigned in each
                    chapter. Written assignments, project works, and research
                    work are used as records on the development of specific
                    skills related to instructional objectives or the attitude
                    expressed or demonstrated by a student towards learning.
                  </p>
                </>
              )}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner3.jpg" alt="Assignment" />
            </div>
            <div
              className="image-wrapper bottom-right"
              onMouseEnter={() => handleMouseEnter(
                <>
                  <h4 className="border-bottom-title w-100 py-2">
                    Time-Bound Written Assessment
                  </h4>
                  <p className="lrpamid-p">
                    At the end of each term, a time-bound written test is given
                    in each subject. This helps the student to know their
                    writing speed and be familiar with our traditional exam
                    system.
                  </p>
                </>
              )}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/banner1.jpg" alt="Time-Bound Written Assessment" />
            </div>
            <div className="center-text px-5 py-2">{centerText}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LRPA;
