import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../style/comment.css";
import Footer from "./footer";
import { FaSearch, FaUser } from "react-icons/fa";
import edulogo from "../images/edulogo.png";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  tutorial: yup.string().required("Please select a tutorial"),
  progress: yup.string().required("Progress update is required"),
  tags: yup.string().required("Please add at least one tag"),
});

const LearningJourneyForm = () => {
  const [comments, setComments] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setComments([...comments, data]);
    reset();
    alert("Your progress has been updated!");
  };

  return (
    <div>
      {/* Header Section */}
      
        <nav className="navbar">
          <div className="logo">
            <img src={edulogo} alt="EduFlow Logo" width="100" />
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
   

      {/* Learning Journey Form */}
      <div className="ccontainer">
        <h2>Tracking Your Learning Journey</h2>
        <p>Track and share your learning journey with the community!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="cform-container">
          <input type="text" placeholder="Name*" {...register("name")} className="cinput-field" />
          <p className="cerror">{errors.name?.message}</p>

          <input type="email" placeholder="Email*" {...register("email")} className="cinput-field" />
          <p className="cerror">{errors.email?.message}</p>

          <select {...register("tutorial")} className="cinput-field">
            <option value="">Select Completed Tutorial</option>
            <option value="Power BI">Power BI</option>
            <option value="HTML & CSS">HTML & CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <p className="cerror">{errors.tutorial?.message}</p>

          <textarea placeholder="Enter your latest progress update..." {...register("progress")} className="cinput-field" />
          <p className="cerror">{errors.progress?.message}</p>

          <input type="text" placeholder="Add Tags" {...register("tags")} className="cinput-field" />
          <p className="cerror">{errors.tags?.message}</p>


          <cbutton type="submit">Post Update</cbutton>
        </form>

        {/* Display Comments */}
        <div className="ccomments-section">
          <h3>Recent Comments</h3>
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to share your progress!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="ccomment-box">
                <strong>{comment.name}</strong>
                <p><em>{comment.tutorial}</em></p>
                <p>{comment.progress}</p>
                <small>Tags: {comment.tags}</small>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearningJourneyForm;