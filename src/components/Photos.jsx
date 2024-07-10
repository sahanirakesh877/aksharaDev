// import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Counter from "yet-another-react-lightbox/plugins/counter";
// import Download from "yet-another-react-lightbox/plugins/download";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

// const imageData = [
//   {
//     id: 1,
//     src: "https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg",
//   },
//   {
//     id: 2,
//     src: "https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg",
//   },
//   {
//     id: 3,
//     src: "https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg",
//   },
//   {
//     id: 4,
//     src: "https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg",
//   },
//   {
//     id: 5,
//     src: "https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg",
//   },
//   {
//     id: 6,
//     src: "https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg",
//   },
//   {
//     id: 7,
//     src: "https://image.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg",
//   },
//   {
//     id: 9,
//     src: "https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76507.jpg",
//   },
//   {
//     id: 10,
//     src: "https://image.freepik.com/free-photo/young-brunette-woman-with-sunglasses-urban-background_1139-893.jpg",
//   },
//   {
//     id: 11,
//     src: "https://image.freepik.com/free-psd/laptop-digital-device-screen-mockup_53876-76509.jpg",
//   },
//   {
//     id: 12,
//     src: "https://image.freepik.com/free-photo/young-woman-holding-pen-hand-thinking-while-writing-notebook_23-2148029424.jpg",
//   },
//   {
//     id: 13,
//     src: "https://image.freepik.com/free-psd/female-fashion-concept_23-2147643598.jpg",
//   },
//   {
//     id: 14,
//     src: "https://image.freepik.com/free-photo/girl-city_1157-16454.jpg",
//   },
//   {
//     id: 15,
//     src: "https://image.freepik.com/free-photo/elegant-lady-with-laptop_1157-16643.jpg",
//   },
//   {
//     id: 16,
//     src: "https://image.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg",
//   },
//   {
//     id: 17,
//     src: "https://image.freepik.com/free-photo/portrait-young-woman_1303-10071.jpg",
//   },
//   {
//     id: 18,
//     src: "https://image.freepik.com/free-photo/beautiful-girl-near-wall_1157-16401.jpg",
//   },
//   {
//     id: 19,
//     src: "https://image.freepik.com/free-photo/woman-taking-photograph-her-boyfriend-enjoying-piggyback-ride-his-back_23-2147841613.jpg",
//   },
//   {
//     id: 20,
//     src: "https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg",
//   },
//   {
//     id: 21,
//     src: "https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg",
//   },
//   {
//     id: 22,
//     src: "https://image.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg",
//   },
//   {
//     id: 23,
//     src: "https://image.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg",
//   },
//   {
//     id: 24,
//     src: "https://image.freepik.com/free-psd/group-people-holding-laptop-mockup-charity_23-2148069565.jpg",
//   },
//   {
//     id: 25,
//     src: "https://image.freepik.com/free-photo/portrait-young-cheerful-woman-headphones-sitting-stairs_1262-17488.jpg",
//   },
//   {
//     id: 26,
//     src: "https://image.freepik.com/free-photo/celebration-concept-close-up-portrait-happy-young-beautiful-african-woman-black-t-shirt-smiling-with-colorful-party-balloon-yellow-pastel-studio-background_1258-934.jpg",
//   },
//   {
//     id: 27,
//     src: "https://image.freepik.com/free-photo/pretty-woman-showing-arm-muscles_23-2148056021.jpg",
//   },
//   {
//     id: 28,
//     src: "https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg",
//   },
//   {
//     id: 29,
//     src: "https://image.freepik.com/free-photo/happy-woman-having-video-call-using-laptop-office_23-2148056211.jpg",
//   },
//   {
//     id: 30,
//     src: "https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg",
//   },
//   {
//     id: 31,
//     src: "https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg",
//   },
//   {
//     id: 32,
//     src: "https://image.freepik.com/free-psd/woman-using-laptop-smartphone_53876-76350.jpg",
//   },
//   {
//     id: 33,
//     src: "https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg",
//   },
//   {
//     id: 34,
//     src: "https://image.freepik.com/free-photo/young-couple-taking-selfie-mobile-phone-against-blue-background_23-2148056292.jpg",
//   },
//   {
//     id: 35,
//     src: "https://image.freepik.com/free-photo/close-up-blonde-woman-sitting-sofa-using-laptop-with-blank-white-screen_23-2148028738.jpg",
//   },
//   {
//     id: 36,
//     src: "https://image.freepik.com/free-photo/group-happy-friends-taking-selfie-cellphone_23-2147859575.jpg",
//   },
//   {
//     id: 37,
//     src: "https://image.freepik.com/free-photo/joyful-pretty-girl-with-curly-hair-takes-selfie-mobile-phone_8353-6635.jpg",
//   },
//   {
//     id: 38,
//     src: "https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg",
//   },
//   {
//     id: 40,
//     src: "https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg",
//   },
//   {
//     id: 41,
//     src: "https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg",
//   },
//   {
//     id: 42,
//     src: "https://image.freepik.com/free-photo/female-friends-sitting-car-hood-taking-self-portrait_23-2147855623.jpg",
//   },
//   {
//     id: 43,
//     src: "/gallery/children-1.jpg",
//   },
// ];

// const Photos = () => {
//   const [open, setOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const handleImageClick = (index) => {
//     setPhotoIndex(index);
//     setOpen(true);
//   };

//   return (
//     <>
//       {open && (
//         <Lightbox
//           open={open}
//           plugins={[Counter, Download, Fullscreen, Zoom]}
//           close={() => setOpen(false)}
//           slides={imageData}
//           currentIndex={photoIndex}
//         />
//       )}

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center my-2">
//           <h2 className="fw-semibold border-bottom-title text-success text-center mb-4">
//             Gallery 
//           </h2>
//           </div>
//         </div>
//         <div className="portfolio-item row">
//           {imageData.map((image, index) => (
//             <div
//               key={image.id} 
//               className={`item col-lg-3 col-md-4 col-6 col-sm`}
//             >
//               <img
//                 className="img-fluid"
//                 src={image.src}
//                 alt=""
//                 onClick={() => handleImageClick(index)}
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Photos;
import React from 'react'
import StackImg from './StackImg'

const Photos = () => {
  return (
    <>
    <StackImg/>
      
    </>
  )
}

export default Photos

