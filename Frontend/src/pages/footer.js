import React from "react";
import visaIcon from "../images/visa.svg";
import mastercardIcon from "../images/mastercard.svg";
import paypalIcon from "../images/paypal.svg";
import applepayIcon from "../images/applepay.svg";
import googlepayIcon from "../images/googlepay.svg";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <p>
            A Skill-Sharing & Learning Platform where users can share skills
            through posts, track learning progress, create structured learning
            plans, engage with likes/comments, follow others, and receive
            notifications—all with social login integration.
          </p>
          <div className="footer-social">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
          <p className="footer-copy">Shop.co © 2000-2023, All Rights Reserved</p>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Our Pricing</li>
            <li>Learning Related</li>
          </ul>
        </div>

        <div className="footer-help">
          <h4>H E L P</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-faq">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>CONTACT INFO</h4>
          <p>Phone : 08893998948</p>
          <p>Email : info@sril.com</p>
          <p>Website : <a href="https://learning.com">https://learning.com</a></p>
          <div className="footer-payment">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="MasterCard" />
            <img src={paypalIcon} alt="PayPal" />
            <img src={applepayIcon} alt="Apple Pay" />
            <img src={googlepayIcon} alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
