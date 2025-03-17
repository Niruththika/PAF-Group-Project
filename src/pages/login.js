import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "../style/login.css";
import loginImage from '../images/loginpage_image.png';
import edulogo from "../images/edulogo.png"; // Adjust the path based on your structure
import { FaUserCircle } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";



const Login = () => {
  return (
    <div className="container">
      <header className="header">
      <div className="logo">
          <img src={edulogo} alt="EduFlow Logo" width="100" /> {/* Using the logo image */}
        </div>
        <h1>SKILLS SHARING AND LEARNING</h1>
      </header>
      <div className="content">
      <div className="login-box">
        <h2>Log In</h2>
        <div className="avatar">
          <FaUserCircle size={50} color="white" /> {/* User Icon */}
        </div>
        <input type="text" placeholder="UserName" className="input-box" />
        <input type="password" placeholder="Password" className="input-box" />
        
        {/* Regular Login Button */}
        <button className="login-btn">Login</button>

        {/* Sign in with Google Button */}
        <button className="google-btn">
          <FcGoogle size={20} /> Sign in with Google
        </button>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>  {/* Navigate to Signup Page */}
        </p>
      </div>
      <div className="illustration">
        <img src={loginImage} alt="Skills Sharing Illustration" />
      </div>
    </div>
    </div>
  );
};

export default Login;
