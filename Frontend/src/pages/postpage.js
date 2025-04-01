import React, { useState } from 'react';
import "../style/postpage.css";
import { FaSearch, FaUser } from "react-icons/fa";
import edulogo from "../images/edulogo.png";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import image3 from '../images/3.png';
import image2 from '../images/2.png';
import image1 from '../images/2.png';
import image4 from '../images/3.png';
import image5 from '../images/2.png';
import image6 from '../images/1.png';
import image7 from '../images/3.png';
import image8 from '../images/2.png';
import Header from "./header";
import Logout from "./logoutbutton"

const PostPage = () => {
  const navigate = useNavigate();
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // Like state
  const [filters, setFilters] = useState({
    categories: [],
    postType: [],
    learningType: [],
    duration: []
  });

  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: "Learn JavaScript in 6 Weeks with practical", 
      category: "Coding", 
      type: "Images", 
      duration: "3 months", 
      image: image3,
      description: "A quick and easy guide to learning JavaScript fundamentals. Perfect for beginners!"
    },
    { 
      id: 2, 
      title: "Lighting Trick: The Golden Hour Effect!", 
      category: "Photography", 
      type: "Images", 
      duration: "6 months", 
      image: image2,
      description: "Master the golden hour lighting technique to capture stunning and professional photos."
    },
    { 
      id: 3, 
      title: "How to Make the Perfect Pancakes", 
      category: "Cooking", 
      type: "Video", 
      duration: "3 months", 
      image: image1,
      description: "Learn the secrets to making fluffy and delicious pancakes with this step-by-step guide."
    },
    { 
      id: 4, 
      title: "DIY Home Decor Hacks", 
      category: "DIY Crafts", 
      type: "Video", 
      duration: "6 months", 
      image: image4,
      description: "Creative and budget-friendly DIY home decor ideas to beautify your space."
    },
    { 
      id: 5, 
      title: "Mastering Portrait Photography", 
      category: "Photography", 
      type: "Images", 
      duration: "1 year", 
      image: image5,
      description: "Learn how to capture stunning portrait photographs with expert techniques."
    },
    { 
      id: 6, 
      title: "Advanced Python Programming", 
      category: "Coding", 
      type: "Video", 
      duration: "6 months", 
      image: image6,
      description: "Take your Python skills to the next level with advanced programming concepts."
    },
    { 
      id: 7, 
      title: "Baking Bread at Home", 
      category: "Cooking", 
      type: "Images", 
      duration: "1 year", 
      image: image7,
      description: "A complete guide to baking fresh and delicious bread at home."
    },
    { 
      id: 8, 
      title: "Creative Art & Craft Ideas", 
      category: "DIY Crafts", 
      type: "Images", 
      duration: "3 months", 
      image: image8,
      description: "Explore fun and creative art and craft ideas for all ages."
    }
  ]);

  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    const checked = event.target.checked;
    setFilters((prev) => {
      const updatedFilter = checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((item) => item !== value);
      return { ...prev, [filterType]: updatedFilter };
    });
  };

  const filteredPosts = posts.filter(post => {
    return (
      (filters.categories.length === 0 || filters.categories.includes(post.category)) &&
      (filters.postType.length === 0 || filters.postType.includes(post.type)) &&
      (filters.duration.length === 0 || filters.duration.includes(post.duration))
    );
  });

  const [showForm, setShowForm] = useState(false);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [others, setOthers] = useState("");
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};
  
    // Validate title
    if (!title.trim()) {
      newErrors.title = "Title is required.";
    } else if (title.length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }
  
    // Validate category
    if (!category.trim()) {
      newErrors.category = "Category is required.";
    } else if (!['Cooking', 'Coding', 'Photography', 'DIY Crafts', 'Others'].includes(category)) {
      newErrors.category = "Please select a valid category.";
    }
  
    // Validate file (check if it's an image or video and size limit)
    if (!file) {
      newErrors.file = "Image or video is required.";
    } else {
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB size limit
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm', 'video/avi'];
  
      if (!validTypes.includes(file.type)) {
        newErrors.file = "Please upload a valid image or video file.";
      } else if (file.size > fileSizeLimit) {
        newErrors.file = "File size must be less than 5MB.";
      }
    }
  
    // Validate duration (must match the expected values or custom format without special characters)
    if (!duration.trim()) {
      newErrors.duration = "Duration is required.";
    } else if (!/^(\d+\s*(hours?|months?))$/i.test(duration)) {
      newErrors.duration = "Duration must be a number followed by 'hours' or 'months' (e.g., 3 hours or 6 months).";
    }
  
    // Validate description (at least 20 characters)
    if (!description.trim()) {
      newErrors.description = "Description is required.";
    } else if (description.length < 20) {
      newErrors.description = "Description must be at least 20 characters.";
    }
  
    // Validate others (at least 10 characters)
    if (!others.trim()) {
      newErrors.others = "Other information is required.";
    } else if (others.length < 10) {
      newErrors.others = "Other information must be at least 10 characters.";
    }
  
    // Set errors in state and return the validation result
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      const newPost = {
        id: posts.length + 1, // Ensure unique ID for the new post
        title,
        category, // Use the entered category
        type: file && file.type.startsWith("video/") ? "Video" : "Images",
        duration,
        image: URL.createObjectURL(file),
        description
      };
  
      setPosts(prevPosts => [...prevPosts, newPost]);
      setShowForm(false); // Close form
      setTitle("");
      setCategory(""); // Reset category
      setFile(null);
      setDuration("");
      setDescription("");
      setOthers("");
      setErrors({});
      alert("Post added successfully!");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
  
      if (fileType.startsWith("video/")) {
        const video = document.createElement("video");
        video.preload = "metadata";
  
        video.onloadedmetadata = function () {
          window.URL.revokeObjectURL(video.src);
          if (video.duration > 30) {
            setErrors((prev) => ({ ...prev, file: "Video duration must be 30 seconds or less." }));
            setFile(null);
          } else {
            setErrors((prev) => ({ ...prev, file: "" }));
            setFile(selectedFile);
          }
        };
  
        video.src = URL.createObjectURL(selectedFile);
      } else {
        setErrors((prev) => ({ ...prev, file: "" }));
        setFile(selectedFile);
      }
    }
  };

  // Drag events
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTitle("");
    setFile(null);
    setDuration("");
    setDescription("");
    setOthers("");
    setErrors({});
  };
  
  return (
    <div className="post-page">
     
        
        <Header/>
    

      <div className="content">
    
        <div className="add-post-container">
          <button className="add-post-button" onClick={handleOpenForm}>
            Add New Post
          </button>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="overlay">
            <div className="add-post-form">
              <button className="close-button" onClick={handleCloseForm}>✖</button>
              <h2 className="form-title">ADD NEW POSTS</h2>

              {/* Two-column layout */}
              <div className="form-container">
                {/* Left Column */}
                <div className="left-column">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                  </div>

                  <div className="form-group">
                    <label>Image Or Video</label>
                    <div
                      className={`file-upload ${dragging ? "dragging" : ""}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById("fileInput").click()}
                    >
                      {file ? (
                        <p>{file.name}</p>
                      ) : (
                        <p>Drag and Drop or Select from device</p>
                      )}
                      <input
                        type="file"
                        id="fileInput"
                        className="file-input"
                        onChange={handleFileChange}
                        accept="image/*,video/*"
                      />
                    </div>
                    {errors.file && <p className="error">{errors.file}</p>}
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      className="input-field"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="Coding">Coding</option>
                      <option value="Photography">Photography</option>
                      <option value="Cooking">Cooking</option>
                      <option value="DIY Crafts">DIY Crafts</option>
                      <option value="Others">Others</option>
                    </select>
                    {errors.category && <p className="error">{errors.category}</p>}
                  </div>
                </div>

                {/* Right Column */}
                <div className="right-column">
                  <div className="form-group">
                    <label>Durations</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                    {errors.duration && <p className="error">{errors.duration}</p>}
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="textarea-field"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                  </div>

                  <div className="form-group">
                    <label>Others</label>
                    <textarea
                      className="textarea-field"
                      placeholder="Other Informations"
                      value={others}
                      onChange={(e) => setOthers(e.target.value)}
                    ></textarea>
                    {errors.others && <p className="error">{errors.others}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="button-container">
                <button className="submit-button" onClick={handleSubmit}>
                  Add new Post
                </button>
              </div>
            </div>
          </div>
        )}

        <aside className="filters">
          <h2>Filters</h2>
          <div>
            <h3>Categories</h3>
            <ul>
              {['Cooking', 'Coding', 'Photography', 'DIY Crafts', 'Others'].map(category => (
                <li key={category}>
                  <input type="checkbox" value={category} onChange={(e) => handleFilterChange(e, 'categories')} /> {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Post Type</h3>
            <ul>
              {['Video', 'Images'].map(type => (
                <li key={type}>
                  <input type="checkbox" value={type} onChange={(e) => handleFilterChange(e, 'postType')} /> {type}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Duration</h3>
            <ul>
              {['3 months', '6 months', '1 year'].map(duration => (
                <li key={duration}>
                  <input type="checkbox" value={duration} onChange={(e) => handleFilterChange(e, 'duration')} /> {duration}
                </li>
              ))}
            </ul>
          </div>
          <div>
<Logout/>
</div>
        </aside>

        <main className="posts">
          {filteredPosts.map(post => (
            <article className="post" key={post.id} onClick={() => {
              setSelectedPost(post);
              setIsLiked(false); // Reset like state when opening a new post
            }}>
              <h2>{post.title}</h2>
              <img src={post.image} alt={post.title} />
              <p>{post.category} - {post.type} - {post.duration}</p>
            </article>
          ))}

          {selectedPost && (
            <div className="poverlay" onClick={() => setSelectedPost(null)} >
              <div className="post-popup" onClick={(e) => e.stopPropagation()}>
                {/* Close button in top-right corner */}
                <button className="close-button" onClick={() => setSelectedPost(null)}>✖</button>

                <h2>{selectedPost.title}</h2>
                <img src={selectedPost.image} alt={selectedPost.title} />

                {/* Like button on the right side */}
                <button 
                  className={`like-button ${isLiked ? 'liked' : ''}`} 
                  onClick={() => setIsLiked(!isLiked)}
                >
                  👍
                </button>

                <p><strong>Category:</strong> {selectedPost.category}</p>
                <p><strong>Type:</strong> {selectedPost.type}</p>
                <p><strong>Duration:</strong> {selectedPost.duration}</p>
                <p>{selectedPost.description}</p>

                {/* Review button at the end */}
                <button 
                  className="review-button" 
                  onClick={() => navigate("/comments", { state: { post: selectedPost } })}
                >
                  Leave a Comment
                </button>
              </div>
            </div>
          )}
        </main>

      </div>

      <Footer />
    </div>
  );
};

export default PostPage;
