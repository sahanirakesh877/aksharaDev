import React from "react";

const Gallery = () => {
  const images = [
    "school/banner1.jpg",
    "school/banner2.jpg",
    "school/banner3.jpg",

    "https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg",
    "https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg",
    "https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg",
    "https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg",
    "school/banner4.jpg",
    "school/banner5.jpg",
    "school/banner1.jpg",
    "https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg",
    "https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg",

  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-lg-3 col-md-12 mb-4 ${index % 2 === 0 ? "order-lg-1 order-md-2" : "order-lg-2 order-md-1"}`}
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
