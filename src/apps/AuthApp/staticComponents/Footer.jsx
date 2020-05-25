import React from "react";

import * as ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer--Content">
      <div className="Footer--Content--main">
        <div className="one">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>About Us</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Contact</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Employer</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>Post a job</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Search Resumes</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Sign in</Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <li>
              <Link to={ROUTES.HOME}>Job Seeker</Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT}>Find jobs</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Create Resumes</Link>{" "}
            </li>
            <li>
              <Link to={ROUTES.HOME}>Sign in</Link>
            </li>
          </ul>
        </div>
        <div className="social-media-links">
          <ul>
            <li>
              <span className="fab fa-facebook-square"></span>Facebook
            </li>
            <li>
              <span className="fab fa-twitter-square"></span>Twitter
            </li>
            <li>
              <span className="fab fa-instagram"></span>Instagram
            </li>
            <li>
              <span className="fab fa-linkedin"></span>LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer--Content--copyright">
        <div className="footer__copyright">&copy; 2020 jobhunt.io</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </div>
    </div>
  );
};

export default Footer;
