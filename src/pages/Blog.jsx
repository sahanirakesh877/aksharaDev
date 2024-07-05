
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Blog = () => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState("Featured News");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const blogData = [
    {
      id: 1,
      title: "School Event Highlights",
      date: "2024-Mar-15",
      des: "Our School celebrating National Parent Involvement Day on December 3.",
      imgSrc:
        "https://img.freepik.com/premium-photo/rear-view-man-using-laptop-table_1048944-232103.jpg?w=740",
    },
    {
      id: 2,
      title: "Online Learning Tips",
      date: "2024-May-12",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
      imgSrc:
        "https://img.freepik.com/premium-vector/prompt-poster-blogger-school-online-courses-flat_81522-4480.jpg?w=740",
    },
    {
      id: 3,
      title: "Student Achievements",
      date: "2024-Apr-10",
      des: "Celebrating National Parent Involvement Day on December 3.",
      imgSrc:
        "https://img.freepik.com/premium-vector/blogging_191504-1627.jpg?w=740",
    },
    {
      id: 4,
      title: "Teacher's Corner",
      date: "2024-Jul-20",
      des: "Year 6 pupils are invited to join us for a Taster Day.",
      imgSrc:
        "https://img.freepik.com/free-photo/still-life-office-desk-mess_23-2150164786.jpg?t=st=1719381624~exp=1719385224~hmac=c75fc545f9ed1778b12bcb002fa89db066174ef5d0ac03a6080438dbb777625b&w=826",
    },
  ];

  const scheduleData = [
    {
      date: "September 8",
      event: ["First Day of School for Students", "Washington Day Holiday"],
    },
    { date: "November 11", event: ["Holiday: Veterans Day"] },
    { date: "November 23–27", event: ["Thanksgiving Break"] },
    { date: "December 21", event: ["First Day of Winter Break"] },
    {
      date: "January 4",
      event: [
        "School Resumes",
        "Independence Day Holiday",
        "Halloween Celebration",
      ],
    },
    { date: "January 18", event: ["Holiday: Martin Luther King Jr. Day"] },
    { date: "February 12", event: ["Lincoln Day Holiday"] },
    { date: "February 15", event: ["Washington Day Holiday"] },
    {
      date: "March 15",
      event: ["Washington Day Holiday", "Washington Day classDay"],
    },
    { date: "April 4", event: ["School Resumes"] },
    {
      date: "May 27",
      event: [
        "Non-Instructional Day. Schools closed",
        "Back to School Preparation",
      ],
    },
    { date: "May 30", event: ["Memorial Day Holiday", "Summer Break Ends"] },
    {
      date: "June 21",
      event: ["Last Day of School", "Back to School Preparation"],
    },
  ];

  const blog = [
    {
      id: 1,
      blogimg: "/school/banner1.jpg",
      title: "Drawing and painting",
      paragraph: "The Workshop focused on Dr. Templeton’s Xavier.",
    },
    {
      id: 2,
      blogimg: "/school/banner2.jpg",
      title: "Drawing and Painting Lessons",
      paragraph: "The Workshop focused on Dr. Templeton’s Xavier.",
    },
    {
      id: 3,
      blogimg: "/school/banner3.jpg",
      title: "High School students share",
      paragraph: "The Workshop focused on Dr. Templeton’s Xavier.",
    },
    {
      id: 4,
      blogimg: "/school/banner4.jpg",
      title: "High School students share",
      paragraph: "The Workshop focused on Dr. Templeton’s Xavier.",
    },
    {
      id: 5,
      blogimg: "/school/banner5.jpg",
      title: "Drawing and painting",
      paragraph: "The Workshop focused on Dr. Templeton’s Xavier.",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const filteredBlogData = blogData.filter((item) => {
    if (filter === "Featured News") {
      return true;
    } else if (filter === "Upcoming Events") {
      return true;
    }
    return false;
  });

  const items = blog.map((item, index) => (
    <div className="item" key={index}>
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div
              className="card__background--main"
              style={{ backgroundImage: `url(${item.blogimg})` }}
            >
              <div className="card__background--layer" />
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            <span className="date__day">11</span>
            <span className="date__month">JAN</span>
          </span>
        </div>
        <div className="blog-card__info">
          <h6>{item.title}</h6>
          <p className="card-text">{item.paragraph}</p>
          <a href="#" className="btn btn--with-icon">
            <i className="btn-icon fa fa-long-arrow-right" />
            READ MORE
          </a>
        </div>
      </article>
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>Blog | Akashara</title>
        <meta
          name="description"
          content="Learn more Blog our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="Blog, Blogus, case, blog company, team, mission, vision, services, review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>

      <div className="blog-banner">
        <div className="container">
          <p className="text-center py-5 fs-2 text-dark  fw-semibold"> Akshara Highlights</p>
          <div className="row">
            <div className="col-md-4">
              <p
                className=" text-center py-3 btns from-left"
                onClick={() => setFilter("Featured News")}
              >
                Featured News
              </p>
            </div>
            <div className="col-md-4">
              <p
                className="btns from-center  text-center py-3"
                onClick={() => setFilter("Upcoming Events")}
              >
                Upcoming Events
              </p>
            </div>
            <div className="col-md-4">
              <p
                className=" text-center py-3 btns  from-right"
                onClick={() => setFilter("Calendar")}
              >
                Calendar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-child">

  

      {filter === "Featured News" && (
        <div className="container py-5">
          <div className="row">
            <AliceCarousel
              mouseTracking
              items={items}
              infinite={true}
              autoPlay={true}
              animationDuration={1500}
              responsive={responsive}
              disableButtonsControls
              disableDotsControls
              controlsStrategy="responsive"
            />
          </div>
        </div>
      )}

      {filter === "Upcoming Events" && (
        <div className="container blog-container py-4">
          <div className="row py-4">
            <h3 className="text-center mb-4   border-bottom-title">School Events Schedule</h3>
            {filteredBlogData.map((item) => (
              <div className="col-md-6 mb-4" key={item.id}>
                <div className="d-flex justify-content-center align-items-center p-3 border">
                  <div className="calenderBox d-flex justify-content-center align-items-center flex-column">
                    <span className="fs-1">{item.date.slice(9, 11)}</span>
                    <span className="calen-date">{item.date.slice(5, 8)}</span>
                  </div>
                  <div className="calender-text d-flex flex-column justify-content-center align-items-start ms-3 flex-fill">
                    <h6>{item.title}</h6>
                    <p className="calen-p">{item.des}</p>
                    <p className="calen-p">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filter === "Calendar" && (
        <div className="container py-4">
          <div className="row">
            <h3 className="text-center my-4  border-bottom-title">Calender Schedule</h3>

            {scheduleData.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="p-3 border">
                  <h6 className="text-success">{item.date}</h6>
                  <div className="d-flex flex-column align-items-start gap-2">
                    {item.event.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="d-flex align-items-center"
                      >
                        <i className="fa-regular fa-calendar text-danger me-2"></i>
                        <p className="card-text mb-0">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Blog;
