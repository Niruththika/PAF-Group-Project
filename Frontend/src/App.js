// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
// import visaLogo from "./images/visa.svg"; /
// import mastercardLogo from "./images/mastercard.svg";
// import paypalLogo from "./images/paypal.svg";
// import applepayLogo from "./images/applepay.svg";
// import googlepayLogo from "./images/googlepay.svg";
// import logo from "./images/edulogo.png";
// import { FaUser } from "react-icons/fa"; 
// import "./App.css";

// function App() {
//   return (
// //     <div>
//       {/* Navbar */}
//       <nav className="navbar">
      // {/* Logo Section */}
      // <div className="logo">
      //   <img src={logo} alt="EduFlow Logo" className="logo-img" />
      // </div>

      // {/* Navigation Links */}
      // <ul className="nav-links">
      //   <li>Home</li>
      //   <li>About Us</li>
      //   <li>Contact Us</li>
      //   <li>Posts</li>
      //   <li>Plans</li>
      //   <li>Progress</li>
      // </ul>

    //   {/* Search Bar and Account Icon */}
    //   <div className="nav-right">
    //     <div className="search-container">
    //       <input type="text" placeholder="Search for courses..." />
    //       <button>🔍</button>
    //     </div>
    //     <FaUser className="account-icon" />
    //   </div>
    // </nav>

      // {/* Hero Section */}
      // <header className="hero">
      //   <h1>SKILLS SHARING AND LEARNING</h1>
      // </header>

      // {/* About Us Section */}
      // <section className="about">
      //   <h2>About Us</h2>
      //   <div className="about-cards">
      //     <div className="card">
      //       <p>At EduFlow, we are dedicated to making learning accessible to everyone.</p>
      //     </div>
      //     <div className="card">
      //       <p>Our platform offers diverse courses to help individuals gain new skills, advance their careers.</p>
      //     </div>
      //     <div className="card">
      //       <p>Our Values: Innovation, Community, Excellence.</p>
      //     </div>
      //     <div className="card">
      //       <p>Join our community and start your learning journey today!</p>
      //     </div>
      //   </div>
      // </section>

      // {/* Contact Us Section */}
      // <section className="contact">
      //   <h2>Contact Us</h2>
      //   <form className="contact-form">
      //     <div className="input-group">
      //       <input type="text" placeholder="Name" />
      //       <input type="email" placeholder="E-mail" />
      //     </div>
      //     <div className="input-group">
      //       <input type="text" placeholder="Contact No" />
      //       <input type="email" placeholder="E-mail" />
      //     </div>
      //     <textarea placeholder="Description"></textarea>
      //     <button type="submit">Submit</button>
      //   </form>
      // </section>

      // {/* Footer */}
      // <footer className="footer">
      // <div className="footer-container">
      //   <div className="footer-section">
      //     <p className="footer-text">
      //       A Skill-Sharing & Learning Platform where users can share skills
      //       through posts, track learning progress, create structured learning
      //       plans, engage with likes/comments, follow others, and receive
      //       notifications—all with social login integration.
      //     </p>
      //     <div className="social-icons">
      //       <FaTwitter className="icon" />
      //       <FaFacebookF className="icon" />
      //       <FaInstagram className="icon" />
      //       <FaGithub className="icon" />
      //     </div>
      //     <p className="footer-copy">Shop.co © 2000-2023, All Rights Reserved</p>
      //   </div>

//         <div className="footer-section">
//           <h3 className="footer-heading">QUICK LINKS</h3>
//           <ul className="footer-links">
//             <li>About</li>
//             <li>Blog</li>
//             <li>Our Pricing</li>
//             <li>Learning Related</li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-heading">HELP</h3>
//           <ul className="footer-links">
//             <li>Customer Support</li>
//             <li>Delivery Details</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3 className="footer-heading">CONTACT INFO</h3>
//           <p>Phone: 08893998948</p>
//           <p>Email: info@sril.com</p>
//           <p>Website: https://learning.com</p>
//           <div className="payment-icons">
//             <img src={visaLogo} alt="Visa" className="payment-logo" />
//             <img src={mastercardLogo} alt="MasterCard" className="payment-logo" />
//             <img src={paypalLogo} alt="PayPal" className="payment-logo" />
//             <img src={applepayLogo} alt="Apple Pay" className="payment-logo" />
//             <img src={googlepayLogo} alt="Google Pay" className="payment-logo" />
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

// export default App;


import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserProfile from "./pages/userprofile";
import PostPage from "./pages/postpage";
import "./style/login.css"; 
import "./style/signup.css"; 
import CommentPage from "./pages/comment";
import Learning from "./pages/learning";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />  {/* Default Login Page */}
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
   return (
     <div className="Footer">
       <Learning />
     </div>
   );
 }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the PostPage as the homepage */}
          <Route path="/" element={<PostPage />} />
          
          {/* Define the Comment page */}
          <Route path="/comments" element={<CommentPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;


