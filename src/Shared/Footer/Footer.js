import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg-image">
      <footer className="footer py-[120px] px-[95px] lg:flex justify-between   text-base-content">
        <div>
          <span className="footer-title">SERVICE</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deeply checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            floarid treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity filling
          </Link>
          <Link to="/" className="link link-hover">
            Teeth whitining
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>

          <Link to="/" className="link link-hover">
            Newyork - 101010 Hudson
          </Link>
        </div>
      </footer>
      <div className="grid justify-center mb-7">
        <p>Copyright 2022 All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
