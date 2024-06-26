import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  const events = [
    {
      id: 1,
      title: "Professional Development",
      date: "2024-06-15",
      img:
        "https://img.freepik.com/free-photo/group-cheerful-happy-students-sitting-lecture-hall-before-lesson_155003-12212.jpg?t=st=1717414478~exp=1717418078~hmac=29446fd307bc49f662ec9a3cc94d860608c4250d2f7646ddb5fda99fa97b7fba&w=826",
    },
    {
      id: 2,
      title: "Labor Day - No School",
      date: "2024-07-20",
      img:
        "https://img.freepik.com/free-photo/smiling-students-studying-together-table_23-2147850724.jpg?t=st=1717414518~exp=1717418118~hmac=a47d3d903a9e96ecadd7f4e6a2933f2fca08785713f630a2166581eead46eecf&w=826",
    },
    {
      id: 3,
      title: "1:15 pm Early Dismissal ",
      date: "2024-08-25",
      img:
        "https://img.freepik.com/free-photo/medium-shot-young-people-dancing-party_23-2150378043.jpg?t=st=1717414536~exp=1717418136~hmac=f22b11d8a8ef19b01d4596ec7462a471f48c3de34e9442334e0bc15a877bc720&w=826",
    },
    {
      id: 4,
      title: "Thanksgiving Recess",
      date: "2024-03-18",
      img:
        "https://img.freepik.com/free-photo/group-glamorous-asian-party-guests-leaning-handrail-looking-away_1098-17462.jpg?t=st=1717414558~exp=1717418158~hmac=0826de1674fb94c4537909170b210c63fe7de9632aa4f979bd8aeefe891f4466&w=826",
    },
    {
      id: 5,
      title: "Election Day - No School  - Staff Only",
      date: "2024-01-12",
      img:
        "https://img.freepik.com/premium-photo/rear-view-audience-conference-hall-seminar-meeting-which-come-before-start-time_41418-2880.jpg?w=826",
    },
  ];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  
  return (
    <>
      <Helmet>
        <title>About | Akashara</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, aboutus, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>
     

     
   
    </>
  );
};

export default About;
