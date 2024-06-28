// import React, { useState } from "react";

// const images = [
//   "/gallery/children3.jpg",
//   "/gallery/children-1.jpg",
//   "/gallery/children-2.jpg",

//   "/gallery/children-4.jpg",
//   "/gallery/children3.jpg",
//   "/gallery/children-5.jpg",
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(images[2]);

//   return (
//     <>
//       <section className="gallery-section">
//         <div className="container my-4 ">
//           <div className="row">
//             <div className="col-md-3  d-flex flex-column align-items-center">
//               {images.slice(0, 3).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Thumbnail ${index}`}
//                   className="img-fluid my-4"
//                   onMouseEnter={() => setSelectedImage(image)}
//                   onClick={() => setSelectedImage(image)}
//                   style={{ height: "160px" }}
//                 />
//               ))}
//             </div>
//             <div className="col-md-6 d-flex justify-content-center align-items-center">
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="img-fluid  rounded shadow"
//                 style={{ maxHeight: "500px" }}
//               />
//             </div>
//             <div className="col-md-3  d-flex flex-column align-items-center">
//               {images.slice(3).map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="img-fluid my-4"
//                   onMouseEnter={() => setSelectedImage(image)}
//                   onClick={() => setSelectedImage(image)}
//                   style={{ height: "160px" }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;
import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="bggallery">
        <div className="container ">
        <h3 className="gallery-head">Explore Images</h3>
          <div className="row  galleryitems ">
            <div className="gallery " >
              <span style={{ "--i": 1 }}>
                <img src="/gallery/children-1.jpg" alt="" />
              </span>
              <span style={{ "--i": 2 }}>
                <img src="/gallery/children-2.jpg" alt="" />
              </span>
              <span style={{ "--i": 3 }}>
                <img src="/gallery/children3.jpg" alt="" />
              </span>
              <span style={{ "--i": 4 }}>
                <img src="/gallery/children-4.jpg" alt="" />
              </span>
              <span style={{ "--i": 5 }}>
                <img src="/gallery/children-5.jpg" alt="" />
              </span>
              <span style={{ "--i": 6 }}>
                <img
                  src="/banner1.jpg"
                  alt=""
                />
              </span>
              <span style={{ "--i": 7 }}>
                <img
                src="/banner2.jpg"
                  alt=""
                />
              </span>
              <span style={{ "--i": 8 }}>
                <img
                 src="/banner3.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
