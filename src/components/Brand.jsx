import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const brandImg = [
  "/brand/brand1.jpg",
  "/brand/brand3.jpg",
  "/brand/brand4.jpg",
  "/brand/brand5.jpg",
  "/brand/brand6.jpg",
  "/brand/brand1.jpg",
];

const responsive = {
  0: { items: 3 },
  568: { items: 4 },
  1024: { items: 5 },
};

const items = brandImg.map((img, index) => (
  <div className="item py-3" key={index}>
    <img src={img} alt={`Brand ${index + 1}`} className="brand-image" />
  </div>
));

const Brand = () => {
  return (
    <>
    <div className="brand">

   
      <div className="container">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay={true}
          infinite={true}
          responsive={responsive}
          controlsStrategy="alternate"
          animationDuration={1500}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
      </div>
    </>
  );
};

export default Brand;
