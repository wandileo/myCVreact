import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              7 Quince Street Milpark
              <br />
              Johannesburg 2092
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around my Website</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.instagram.com/wandi_leo"
              target="_blank"
            >
              <i className="fab fa-fw fa-instagram"></i>
            </a>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">My Email Address</h4>
            <p className="lead mb-0">wandilemaluleke@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
