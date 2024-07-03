import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container  ">
        <div className="row d-flex align-items-center py-5  ">
          <h2 className="  fw-semibold border-bottom-title text-success text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center">
              If you have any questions, feel free to reach out to us via the
              form below or through any of the contact methods listed.
            </p>

          <div className="col-md-6  contact-left  border">
         <h2 className="fst-italic  ">Talk to Us</h2>
            <form>
              <div className="form-group pb-2 ">
                <label htmlFor="name" className="pb-1 ">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control pb-2 rounded-1  "
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="email" className="pb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-1  pb-2"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="number" className="pb-1">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control rounded-1 pb-2 "
                  id="number"
                  placeholder="Your Phone "
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="message" className="pb-1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-0 py-2 mb-3 rounded-1 bg-danger text-white w-100"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6  ">
            <div
              className="map-container"
              style={{
                position: "relative",
                paddingBottom: "62.90%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56528.98843456104!2d85.29982577525458!3d27.684485455816603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1a3058f08937%3A0x5e58e8a5ed6fa73b!2sM9X9%2B5C5%20Aksharaa%20School%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.6973403!2d85.3670331!5e0!3m2!1sen!2snp!4v1715844547576!5m2!1sen!2snp"
                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="contact-info  contact-right pb-4 my-md-0 ">
              <div className="mb-3">
                <i className="fa fa-envelope border border-success rounded-circle p-2 bg-white me-2"></i>
                <p className="d-inline ml-2">info@aksharaaschool.edu.np</p>
              </div>
              <div className="mb-3">
                <i className="fa fa-phone  border border-success rounded-circle p-2 bg-white me-2"></i>
                <p className="d-inline ml-2">+977-01-4993031/32/33</p>
              </div>
              <div className="mb-3">
                <i className="fa fa-location border border-success rounded-circle p-2 bg-white me-2"></i>
                <p className="d-inline ml-2">
                  Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
