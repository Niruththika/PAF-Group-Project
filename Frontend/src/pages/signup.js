import React from "react";
import "../style/signup.css";
import { Link } from "react-router-dom"; 
import edulogo from "../images/edulogo.png";
import signupImage from "../images/signuppage_image.png"; 
import { FcGoogle } from "react-icons/fc"; 


const Signup = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={edulogo} alt="EduFlow Logo" />
        </div>
        <h1>SKILLS SHARING AND LEARNING</h1>
      </header>

      <div className="content">
        <div className="signup-box">
      <h2>SignUp</h2>
      <input type="text" placeholder="First Name" className="input-box" />
      <input type="text" placeholder="Last Name" className="input-box" />
      <input type="email" placeholder="Email" className="input-box" />
      <input type="password" placeholder="Password" className="input-box" />
      <input type="password" placeholder="Confirm Password" className="input-box" />
      
      <button className="signup-btn">Sign up</button>
      
      <button className="google-btn">
        <FcGoogle size={20} /> Sign up with Google
      </button>
      
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>

        <div className="illustration">
          <img src={signupImage} alt="Skills Sharing Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
