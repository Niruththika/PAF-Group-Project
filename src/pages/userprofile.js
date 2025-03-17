import React from "react";
import "../style/userprofile.css";
import { FaSearch, FaUser, FaEdit ,FaUserCircle} from "react-icons/fa";
import edulogo from "../images/edulogo.png"; // Adjust the path based on your structure
import image1 from '../images/1.png';  // Correct the path to the image
import image2 from '../images/2.png';  // If you have another image
import image3 from '../images/3.png';  // Another example
import Footer from "./footer";


const users = [
  { name: "Abiramy" },
  { name: "Mathusigan" },
  { name: "Thuvaraga" },
  { name: "Kishan" },
  { name: "Sutharsan" },
  { name: "Divya" },
];

const UserCard = ({ name }) => (
  <div className="user-card">
    <div className="avatar"></div>
    <span>{name}</span>
  </div>
);

const notifications = [
  "Abiramy Commented on your Post",
  "Abiramy Commented on your Post",
  "Abiramy Commented on your Post",
  "Abiramy Commented on your Post",
];


const Card = ({ title, image, content, highlight }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt="" className="card-image" />
      <p className="card-content">{content}</p>
      <p className="card-highlight">{highlight}</p>
    </div>
  );
};


const NotificationItem = ({ text }) => (
  <div className="notification-item">
    <span>{text}</span>
    <div className="icons">
      <button className="delete-btn">✖</button>
      <button className="like-btn">👍</button>
    </div>
  </div>
);

const UserProfile = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={edulogo} alt="EduFlow Logo" width="100" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Posts</li>
          <li>Plans</li>
          <li>Progress</li>
        </ul>

        <div className="search-bar">
          <input type="text" placeholder="Search for courses..." />
          <FaSearch className="search-icon" />
        </div>
        <FaUser className="user-icon" />
      </nav>


{/* profile */}
      <div className="pcontainer">
        <div className="profile-section">
        <div className="profile-card">
  {/* Left Section: User Avatar */}
  <div className="profile-avatar">
    <FaUserCircle className="user-icons" />
    <h2>User Profile</h2>
  </div>

  {/* Right Section: User Details */}
  <div className="profile-details">
    <p>
      <strong>Name:</strong> Niruththika Erambanathan <FaEdit className="edit-icon" />
    </p>
    <p>
      <strong>Email:</strong> niruththihaz7@gmail.com <FaEdit className="edit-icon" />
    </p>
    <p>
      <strong>Password:</strong> N1234567 <FaEdit className="edit-icon" />
    </p>
  </div>
</div>

{/* Learning progress and updates */}
<div className="course-progress-card">
  {/* Left Section: Course Progress */}
  <div className="course-progress">
    <h3 className="learning-progress-heading">Learning Progress</h3>
  <p className="course-name">Python Course</p>
    <div className="progress-bar">
      <div className="progress green" style={{ width: "70%" }}></div>
      <div className="progress red" style={{ width: "30%" }}></div>
    </div>
    <p className="course-name">Icing Course</p>
    <div className="progress-bar">
      <div className="progress green" style={{ width: "40%" }}></div>
      <div className="progress red" style={{ width: "60%" }}></div>
    </div>
    <p className="course-name">Tailoring Course</p>
    <div className="progress-bar">
      <div className="progress green" style={{ width: "85%" }}></div>
      <div className="progress red" style={{ width: "15%" }}></div>
    </div>
  </div>

  {/* Right Section: Course Notifications */}
  <div className="course-notifications">
  <h3 className="learning-progress-heading">Learning New Updates</h3>
    <button className="notification">Icing Course is in Live ✖</button>
    <button className="notification">Added new React Course ✖</button>
  </div>
</div>

        </div>
      </div>

    {/* followers and Notifications */}
      <div className="social-container">
      <div className="followers-following">
      <div className="followers">
  <h2>Followers</h2>
  <div className="grid-container">
    {users.map((user, index) => (
      <div className="user-card" key={index}>
        <div className="avatar"></div>
        <div className="name">{user.name}</div>
      </div>
    ))}
  </div>
</div>

<div className="following">
  <h2>Following</h2>
  <div className="grid-container">
    {users.map((user, index) => (
      <div className="user-card" key={index}>
        <div className="avatar"></div>
        <div className="name">{user.name}</div>
      </div>
    ))}
  </div>
</div>

      </div>

      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.map((note, index) => (
          <NotificationItem key={index} text={note} />
        ))}
      </div>
    </div>
    <div className="outbox">
      <div className="container-horizontal">
        <Card
          title="Learn JavaScript in 5 Minutes – A Beginner’s Guide"
          image={image1}
          content="Master the basics of JavaScript, from variables to functions, with this quick and easy guide! Steps: 1. Understanding Variables 2. Writing Functions 3. Loops & Conditions"
          highlight="Save this post & start coding today!"
        />
        <Card
          title="How to Make the Perfect Pancakes – Quick & Easy!"
          image={image2}
          content="Ingredients List: • 1 cup flour • 1 egg • ½ cup milk Step-by-Step Instructions: 1. Mix all ingredients. 2. Heat the pan and pour the batter. 3. Flip when bubbles form"
          highlight="Try this recipe & tag us in your pancake pics!"
        />
        <Card
          title="Lighting Trick: The Golden Hour Effect!"
          image={image3}
          content="Tip: 'The golden hour (right after sunrise & before sunset) gives warm, soft light for stunning photos!' Bonus Suggestion: 'Try using a 45-degree angle for the best natural light.'"
          highlight="Tag a friend who needs to know this!"
        />
        
      </div>
    </div>

    <Footer/>
    </div>
  );
};

export default UserProfile;
