import React, { useEffect } from "react";
import '../css/Team.css'
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Team = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Team | Akashara</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />{" "}
      </Helmet>
 

 
  <section id="bod" className="bod_area">
    <div className="container">								
      <h2 className="title_spectial">Administration & Operations</h2>
      <div className="row text-center">

        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="https://aksharaaschool.edu.np/storage/members/January2023/jx5H9QzLfYRjMzDTjetA.jpg" className="img-fluid" alt />
              <h4>Rashmila Thapa</h4>
              <p>Accountant</p>
            </div>	
            <ul className="social">
              <li><a href="#" className="fa fa-facebook facebook" /></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div>
        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="	https://aksharaaschool.edu.np/storage/members/October2019/lNwTEleOknIKHophNWjE.png" className="img-fluid" alt />
              <h4>Kaushila Pokharel</h4>
              <p>Financial Manager</p>
            </div>	
            <ul className="social">
              <li><a href="#" className="fa fa-facebook facebook" /></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div>
        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="	https://aksharaaschool.edu.np/storage/members/April2022/YfzsZUdflAn4ZS657EfW.jpg" className="img-fluid" alt />
              <h4>Ram Kumar Adhikari</h4>
              <p>IT Incharge</p>
            </div>	
            <ul className="social">
              <li><a href="#" className="fa fa-facebook facebook" /></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div>
        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="https://aksharaaschool.edu.np/storage/members/February2022/GybhzCk3WloVI8Eqe3UO.JPG" className="img-fluid" alt />
              <h4>Bimal Bhattarai</h4>
              <p>Admin cum Transportation Incharge</p>
            </div>	
            <ul className="social">
              <li><a href="#" className="fa fa-facebook facebook" /></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div> 
        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="https://aksharaaschool.edu.np/storage/members/February2022/PTp8lyBO7oCeIyYgJ14A.jpg" className="img-fluid" alt />
              <h4>Sabin Nepal</h4>
              <p>Operation Incharge</p>
            </div>	
            <ul className="social">
              <li className="facebook"><i class="fa-brands fa-facebook-f "></i></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div>
        <div className="col-lg-3 col-sm-3 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0} style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInLeft'}}>
          <div className="our-bod">
            <div className="single-bod">
              <img src="	https://aksharaaschool.edu.np/storage/members/February2021/BkxmYM3vpdhNzy0liDLR.jpg" className="img-fluid" alt />
              <h4>Sabina Karanjeet</h4>
              <p>Front Desk Officer</p>
            </div>	
            <ul className="social">
              <li><a href="#" className="fa fa-facebook facebook" /></li>
              <li><a href="#" className="fa fa-twitter twitter" /></li>
              <li><a href="#" className="fa fa-google google" /></li>
            </ul>						
          </div>
        </div> 
      </div>		
    </div>
  </section>



    </>


  );
};

export default Team;
