// import React from "react";
// import { Link } from "react-router-dom";  
// import "../style/login.css";
// import loginImage from '../images/loginpage_image.png';
// import edulogo from "../images/edulogo.png"; 
// import { FaUserCircle } from 'react-icons/fa';
// import { FcGoogle } from "react-icons/fc";


// //start code
// const Login = () => {
//   return (
//     <div className="container">
//       <header className="header">
//       <div className="logo">
//           <img src={edulogo} alt="EduFlow Logo" width="100" /> 
//         </div>
//         <h1>SKILLS SHARING AND LEARNING</h1>
//       </header>
//       <div className="content">
//       <div className="login-box">
//         <h2>Log In</h2>
//         <div className="avatar">
//           <FaUserCircle size={50} color="white" /> 
//         </div>
//         <input type="text" placeholder="UserName" className="input-box" />
//         <input type="password" placeholder="Password" className="input-box" />
        
//         <button className="login-btn">Login</button>

//         <button className="google-btn">
//           <FcGoogle size={20} /> Sign in with Google
//         </button>

//         <p>
//           Don't have an account? <Link to="/signup">Sign up</Link>  
//         </p>
//       </div>
//       <div className="illustration">
//         <img src={loginImage} alt="Skills Sharing Illustration" />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import "../style/login.css";
import edulogo from "../images/edulogo.png"; 
import image1 from "../images/landing1.jpg";
import image2 from "../images/learning2.jpg";
import image3 from "../images/learning3.jpeg";
import LoginButton from "./loginbutton"

const images = [image1, image2, image3]; // Array of images

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="lcontainer">
      {/* Header Section */}
      <header className="lheader">
        <div className="llogo">
          <img src={edulogo} alt="EduFlow Logo" width="100" /> 
        </div>
        <h1>SKILLS SHARING AND LEARNING</h1>
      </header>

      <div className="lmain-content">
        {/* Left Side Content */}
        <div className="lleft-side">
          <p>EduFlow is a dynamic platform where learners and experts come together to exchange knowledge, enhance skills, and grow professionally. Whether you're looking to master a new skill, teach what you know, or collaborate with like-minded individuals, SkillHub is the perfect place for you.
</p>
<p>🔹 Learn from Experts – Access courses, tutorials, and live sessions from industry professionals.</p>
<p>🔹 Share Your Knowledge – Teach others by creating courses, writing articles, or hosting webinars.</p>
<p>🔹 Connect & Collaborate – Join a community of passionate learners and mentors.</p>

<p>Start your journey today – Learn, Share, and Succeed! 🚀</p>
<LoginButton/>
        </div>

        {/* Fading Image Slider */}
        <div className="slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slider-image ${index === currentImage ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Login;