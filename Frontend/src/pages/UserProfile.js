import React ,{useState } from "react";
import "../style/userprofile.css";
import { FaSearch, FaUser, FaEdit ,FaUserCircle} from "react-icons/fa";
import edulogo from "../images/edulogo.png"; 
import image1 from '../images/1.png';  
import image2 from '../images/2.png';  
import image3 from '../images/3.png';  
import Footer from "./footer";
import Header from "./header";



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
  // State for Profile Information
  const [user, setUser] = useState({
    name: "Niruththika Erambanathan",
    email: "niruththihaz7@gmail.com",
    password: "N1234567",
  });

  // State for Modal Visibility
  const [isEditing, setIsEditing] = useState(false);
  
  // State to Store Form Input
  const [formData, setFormData] = useState(user);

  // Handle Input Change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData); 
    setIsEditing(false); 
  };

  return (
    <>
        <Header />
    <div className="container">

      <div className="pcontainer">
        <div className="profile-section">
        <div className="profile-card">
 
  <div className="profile-avatar">
    <FaUserCircle className="user-icons" />
    <h2>User Profile</h2>
  </div>

  
  <div className="profile-details">
  <p><strong>Name:</strong> {user.name}</p>
  <p><strong>Email:</strong> {user.email}</p>
  <p><strong>Password:</strong> *******</p> {/ Hide actual password for security */}
  
  <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} /> {/* Single Edit Button */}
</div>


{isEditing && (
  <div className="modal-overlay" onClick={() => setIsEditing(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    </div>
  </div>
)}

</div>


<div className="course-progress-card">
 
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

   
    <div className="add-new-container">
      <button className="add-new-btn">+ Add New</button>
    </div>
  </div>


 
  <div className="course-notifications">
    <h3 className="learning-progress-heading">Learning New Updates</h3>
    <button className="notification">Icing Course is in Live ✖</button>
    <button className="notification">Added new React Course ✖</button>
  </div>
</div>


        </div>
      </div>

    
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
   
    <Footer/>
    </div>
    </>
  );
};

export default UserProfile;