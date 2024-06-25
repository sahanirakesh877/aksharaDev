import React from "react";

const carouselData = [
  {
    id: 0,
    image: "/banner1.jpg",
    title: "Exploring new horizons and growing knowledge",
    description: "Akshara School",
  },
  {
    id: 1,
    image: "/banner2.jpg",
    title: "Engaging and interactive learning experiences",
    description: "Akshara School",
  },
  {
    id: 2,
    image: "/banner3.jpg",
    title: "Fostering creativity and independent learning",
    description: "Akshara School",
  },
];

const Banner = () => {
  return (
    <>
      <section className="home">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-controls">
            <ol className="carousel-indicators">
              {carouselData.map((item, index) => (
                <li
                  key={item.id}
                  data-bs-target="#carousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              ))}
            </ol>

            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-bs-slide="prev"
            >
              <img src="/left-arrow.svg" alt="Prev" />
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-bs-slide="next"
            >
              <img src="/right-arrow.svg" alt="Next" />
            </a>
          </div>


          <div className="carousel-inner">
            {carouselData.map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="container">
                  <h2>{item.title}</h2>
                  <p>{item.description} | Playgroup to Grade 10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
