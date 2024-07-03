import React from "react";

const imageData = [
  { id: 1, src: "/school/banner3.jpg", alt: "Children 1" },
  { id: 2, src: "/gallery/children-2.jpg", alt: "Children 2" },
  { id: 3, src: "/gallery/children3.jpg", alt: "Children 3" },
  { id: 4, src: "/gallery/children-4.jpg", alt: "Children 4" },
  { id: 5, src: "/gallery/children-5.jpg", alt: "Children 5" },
  { id: 6, src: "/banner1.jpg", alt: "Banner 1" },
  { id: 7, src: "/banner2.jpg", alt: "Banner 2" },
  { id: 8, src: "/banner3.jpg", alt: "Banner 3" }
];

const Gallery = () => {
  return (
    <>
      <div className="bggallery">
        <div className="container mx-auto ">
        <h3 className="fs-2 fw-semibold  gallery-head">Explore Gallery</h3>
          <div className="row galleryitems ">
            <div className="gallery">
              {imageData.map((image, index) => (
                <span key={image.id} style={{ "--i": index + 1 }}>
                  <img src={image.src} alt={image.alt} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
