import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../style/comment.css";
import Footer from "./footer";
import Header from "./header";

// ✅ Updated validation schema
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),
  
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  
  tutorial: yup.string().required("Please select a tutorial"),
  
  progress: yup
    .string()
    .min(10, "Progress update must be at least 10 characters long")
    .required("Progress update is required"),
  
  tags: yup
    .string()
    .required("Please add at least one tag"),
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
      <Header />
      <div className="ccontainer">
        <h2>Tracking Your Learning Journey</h2>
        <p>Track and share your learning journey with the community!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="cform-container">
          {/* Name Field */}
          <input 
            type="text" 
            placeholder="Name*" 
            {...register("name")} 
            className="cinput-field" 
          />
          <p className="cerror">{errors.name?.message}</p>

          {/* Email Field */}
          <input 
            type="email" 
            placeholder="Email*" 
            {...register("email")} 
            className="cinput-field" 
          />
          <p className="cerror">{errors.email?.message}</p>

          {/* Tutorial Selection */}
          <select {...register("tutorial")} className="cinput-field">
            <option value="">Select Completed Tutorial</option>
            <option value="Power BI">Power BI</option>
            <option value="HTML & CSS">HTML & CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <p className="cerror">{errors.tutorial?.message}</p>

          {/* Progress Update */}
          <textarea 
            placeholder="Enter your latest progress update..." 
            {...register("progress")} 
            className="cinput-field" 
          />
          <p className="cerror">{errors.progress?.message}</p>

          {/* Tags Field */}
          <input 
            type="text" 
            placeholder="Add Tags" 
            {...register("tags")} 
            className="cinput-field" 
          />
          <p className="cerror">{errors.tags?.message}</p>

          {/* Submit Button */}
          <button type="submit" className="csubmit-btn">Post Update</button>
        </form>

        {/* Comments Section */}
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