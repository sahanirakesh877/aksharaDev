import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/Creative.css';

const CreativeWeek = () => {
  const brandImg = [
    "/school/banner1.jpg",
    "/school/banner2.jpg",
    "/school/banner3.jpg",
    "/school/banner4.jpg",
    "/school/banner5.jpg",
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = brandImg.map((img, index) => (
    <div className="creative-item card p-3" key={index}>
      <div className="img-container">
        <img src={img} alt={`Brand ${index + 1}`} className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Creative Week {index + 1}</h5>
        <p className="card-text">Some description about this creative item.</p>
        <div className="d-flex justify-content-end ">
          <a href="#" className="bg-success p-1 rounded-circle ">
            <i className="fab fa-facebook p-2 "></i>
          </a>
          <a href="#" className="bg-success p-1 rounded-circle">
            <i className="fab fa-whatsapp p-2 rounded-circle"></i>
          </a>
          <a href="#" className="bg-success p-1 rounded-circle">
            <i className="fab fa-instagram p-2 "></i>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <h4 className="text-center border-bottom-title w-100 head-color mb-5">
              <span className="addcolor">Creatives Of </span> This Week
            </h4>

            <AliceCarousel
              mouseTracking
              items={items}
              autoPlay={true}
              infinite={true}
              autoPlayDirection="rtl"
              responsive={responsive}
              controlsStrategy="alternate"
              animationDuration={6000}
              disableButtonsControls={true}
            />
          </div>
          <div className="col-lg-6">
            <h4 className="text-center border-bottom-title w-100 head-color mb-5">
              <span className="addcolor">Important </span> Notice
            </h4>
            <div className="creative-items border">
              <img
                src="https://img.freepik.com/free-vector/flat-design-back-school-sales-concept_23-2148612151.jpg?t=st=1720522381~exp=1720525981~hmac=0b926379529b99d0a0f8b16688a8eb23dd8e5edf8df360bb2a1eaf7decc669af&w=826"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWeek;
