import React from "react";
import "../css/Kindergarten.css";

const Kindergarten = () => {
  return (
    <>
      <div className="kinderbanner my-md-0">
        <img src="/school/banner2.jpg" alt="Kindergarten Banner" />
        <h3 className="xyz">Kindergarten </h3>

        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Kindergarten</li>
          </ul>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container mx-auto">
          <div className="row d-flex justify-content-between align-items-start ">
            <div className="col-md-6 col-12">
              <h6 className="kinder-head mb-md-1">Our Philosophy</h6>
              <p className="kinder-text">
                At Aksharaa Kindergarten, every child is seen as an intelligent
                individual. We respect and understand their unique differences
                and strive for their holistic development through a Balanced
                Education System. This approach includes age-appropriate
                cognitive, physical, emotional, and social activities.
              </p>
              <h6 className="kinder-head mb-md-1">Learning Approach</h6>
              <p className="kinder-text">
                We follow the Learning-Reinforcement-Practice-Application (LRPA)
                module to ensure balanced schooling. Our
                Touch-Explore-Learn-Enjoy process stimulates curiosity,
                encourages exploration, and instills a lifelong joy of learning.
              </p>
              <h6 className="kinder-head mb-md-1">Early Years Focus</h6>
              <p className="kinder-text">
                Research shows that most brain development happens in the first
                six years. We provide a nurturing environment that promotes
                reading, listening, and playing, crucial for early development.
              </p>
              <h6 className="kinder-head mb-md-1">
                Child-Friendly Environment:
              </h6>
              <p className="kinder-text">
                We create a friendly space where children can interact with the
                real world, fostering emotional, social, and cognitive skills.
                Our scientifically designed activities encourage children to
                listen, imagine, discover, and create.
              </p>
              <h6 className="kinder-head mb-md-1">Individual Growth</h6>
              <p className="kinder-text">
                Teachers at Aksharaa Kindergarten appreciate each child's unique
                approach to learning. They support mental, physical, emotional,
                and social growth, helping children become happy, confident, and
                creative individuals.
              </p>

              <ul className="kinder-ul mb-md-1">
                <li className="kinder-li">
                  Aksharaa Approach to Quality Education
                </li>
                <li className="kinder-li">
                  Well researched, age-appropriate theme-based integrated
                  curriculum for holistic development of children
                </li>
                <li className="kinder-li">
                  Our teachers and staffs are caring, well-motivated,
                  experienced, qualified and trained
                </li>
                <li className="kinder-li">
                  Fun-filled-activity based approach to learning
                </li>
                <li className="kinder-li">
                  Practical and contextualized field-based learning
                  opportunities
                </li>
                <li className="kinder-li">
                  Co-curricular and extra-curricular activities like music, art,
                  and craft, dance, splash etc.
                </li>
                <li className="kinder-li">
                  Strong and continuous collaboration between parents and
                  teachers
                </li>
                <li className="kinder-li">
                  Child-friendly ambiance with non-toxic and safe equipment and
                  toys
                </li>
                <li className="kinder-li">ICT integrated activities</li>
              </ul>
            </div>

            <div className=" col-12  col-md-6 ">
              <div className="g pb-3">
                <div className="gallerys p-4 ">
                  <img
                    src="/gallery/children-5.jpg"
                    alt="a big park inside a modern city"
                  />
                  <img
                    src="/gallery/children-4.jpg"
                    alt="a small street between building"
                  />
                  <img
                    src="/gallery/children-1.jpg"
                    alt="seen from the sky of a big city"
                  />
                  <img
                    src="/gallery/children-2.jpg"
                    alt="a bridge in the night"
                  />
                </div>
              </div>
              <h6 className="kinder-head mb-md-1">
                Individualized Assessment:
              </h6>
              <p className="kinder-text">
                At Aksharaa, we believe every child is intelligent and capable
                of learning in the right environment. We continuously assess
                children during activities, rather than through formal tests,
                allowing us to track progress and adjust our approach in
                real-time.
              </p>
              <h6 className="kinder-head mb-md-1">LRPA Module</h6>
              <p className="kinder-text">
                We use the Learning-Reinforcement-Practice-Application (LRPA)
                module. Children learn through play and involvement in cultural,
                social, and everyday activities. Learning is reinforced through
                engaging activities like drama, visual presentations, and
                role-play. They practice their knowledge through interactive
                activities and apply their learning in real-life situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kindergarten;
