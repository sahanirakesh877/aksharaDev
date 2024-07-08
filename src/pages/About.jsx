import React from "react";

const About = () => {
  return (
    <>


    <div className="mission-vision-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="w-100 border-bottom-title  py-2">
              Our Mission & Vision
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="mission-vision-content mission-vision-content1">
              <h5 className="text-start  text-light">Mission</h5>
              <p>
                Aksharaa School inculcates value-based education with academic
                excellence through collaboration with parents and other
                stakeholders to instill resilience, leadership skills, and
                emotional intelligence in each learner.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-vision-content mission-vision-content2">
              <h5 className="text-light text-end ">Vision</h5>
              <p className="">
                Nurturing young learners to become lifelong learners globally
                competent and responsible citizens
              </p>
            </div>
          </div>
        </div>

        <div className="row py-5 d-flex align-items-center">
          <div className="col-md-6">
            <h4 className=" py-2">OUR PHILOSOPHY AND APPROACH</h4>
            <p className="about-p ">
              Aksharaa School adopts a student-centered, constructivist
              philosophy, fostering autonomous learning and emphasizing
              awareness, autonomy, and authenticity. We cater to diverse
              intelligences, promoting holistic growth through a balanced
              education system that supports cognitive, physical, emotional, and
              social development.
            </p>
            <p className="about-p">
              Our Learning-Reinforcement-Practice-Application (LRPA) module
              enhances cognitive abilities with fun and curiosity, encouraging
              critical thinking, collaboration, creativity, and problem-solving.
              This prepares students to be global citizens.
            </p>
            <p className="about-p">
              We value respect and diversity, blending traditional values with
              modern technology. Through national festivals and educational
              trips, we instill patriotism and global awareness, aiming to
              nurture well-rounded, globally competent citizens.
            </p>

            <button class="button-21" role="button">
              {" "}
              Know More{" "}
            </button>
          </div>
          <div className="col-md-6">
            <video width="100%" height="auto" controls>
              <source
                src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
