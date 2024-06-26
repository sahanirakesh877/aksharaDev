import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const blogData = [
    {
      id: 1,
      title: "School Event Highlights",
      date: "2024-Mar-15",
      imgSrc:
        "https://img.freepik.com/premium-photo/rear-view-man-using-laptop-table_1048944-232103.jpg?w=740",
    },
    {
      id: 2,
      title: "Student Achievements",
      date: "2024-Apr-10",
      imgSrc:
        "https://img.freepik.com/premium-vector/blogging_191504-1627.jpg?w=740",
    },
    {
      id: 3,
      title: "Online Learning Tips",
      date: "2024-May-05",
      imgSrc:
        "https://img.freepik.com/premium-vector/prompt-poster-blogger-school-online-courses-flat_81522-4480.jpg?w=740",
    },
    {
      id: 4,
      title: "Teacher's Corner",
      date: "2024-Jun-20",
      imgSrc:
        "https://img.freepik.com/free-photo/still-life-office-desk-mess_23-2150164786.jpg?t=st=1719381624~exp=1719385224~hmac=c75fc545f9ed1778b12bcb002fa89db066174ef5d0ac03a6080438dbb777625b&w=826",
    },
    {
      id: 5,
      title: "Upcoming School Events",
      date: "2024-Jul-10",
      imgSrc:
        "https://img.freepik.com/premium-photo/blog-text-notepad_218381-136.jpg?w=826",
    },
  ];
  

  return (
    <>
      <Helmet>
        <title>Blog | Akashara</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services, review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>

      <div className="container blog-container">
        <div className="row py-5">
          <div className="col-md-4 mb-4">
            {blogData.slice(0, 2).map((blog) => (
              <div className="blog-card mb-4" key={blog.id}>
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="img-fluid"
                />
                <div className="overlay">
                  <h6 className="card-title">{blog.title}</h6>
                  <p className="card-text">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 mb-4 h-100">
            {blogData.slice(2, 3).map((blog) => (
              <div className="card mb-4" key={blog.id}>
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="card-img-top"
                />
                <div className="overlay">
                  <h6 className="card-title">{blog.title}</h6>
                  <p className="card-text">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 mb-4 ">
            {blogData.slice(3, 5).map((blog) => (
              <div className="card mb-4 " key={blog.id}>
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="card-img-top"
                />
                <div className="overlay">
                  <h6 className="card-title">{blog.title}</h6>
                  <p className="card-text">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
