import React from "react";
import "../css/Honmeblog.css";

const HomeBlog = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="row">

          <div className="col-md-3 border">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h6>Why is the Tesla Cybertruck designed the way it is?</h6>
                <p>An exploration into the truck's polarising design</p>
              
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                  alt="ballons"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-purple">Popular</span>
                <h6>How to Keep Going When You Don’t Know What’s Next</h6>
                <p>
                  The future can be scary, but there are ways to deal with that
                  fear.
                </p>
               
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                  alt="city"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-pink">Design</span>
                <h6>10 Rules of Dashboard Design</h6>
                <p>Dashboard Design Guidelines</p>
               
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                  alt="ballons"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-purple">Popular</span>
                <h6>How to Keep Going When You Don’t Know What’s Next</h6>
                <p>
                  The future can be scary, but there are ways to deal with that
                  fear.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
