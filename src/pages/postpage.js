import React, { useState } from 'react';
import "../style/postpage.css";
import { FaSearch, FaUser } from "react-icons/fa";
import edulogo from "../images/edulogo.png";
import Footer from "./footer";
import image3 from '../images/3.png';
import image2 from '../images/2.png';
import image1 from '../images/2.png';
import image4 from '../images/3.png';
import image5 from '../images/2.png';
import image6 from '../images/1.png';
import image7 from '../images/3.png';
import image8 from '../images/2.png';
const postsData = [
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
];


const PostPage = () => {
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // Like state
  const [filters, setFilters] = useState({
    categories: [],
    postType: [],
    learningType: [],
    duration: []
  });

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

  const filteredPosts = postsData.filter(post => {
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

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!file) newErrors.file = "Image or video is required.";
    if (!duration.trim()) newErrors.duration = "Duration is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!others.trim()) newErrors.others = "Other information is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  {errors.title && <p className="error">{errors.title}</p>}
{errors.file && <p className="error">{errors.file}</p>}
{errors.duration && <p className="error">{errors.duration}</p>}
{errors.description && <p className="error">{errors.description}</p>}
{errors.others && <p className="error">{errors.others}</p>}


  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Here you can handle form submission logic (e.g., API call)
      setShowForm(false);
    }
  };

  // Handle file selection
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
            setErrors((prev) => ({ ...prev, file: "" })); // Clear errors
            setFile(selectedFile);
          }
        };
  
        video.src = URL.createObjectURL(selectedFile);
      } else {
        setErrors((prev) => ({ ...prev, file: "" })); // Clear errors if it's an image
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
      setErrors((prev) => ({ ...prev, file: "" })); // Clear error if file dropped
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
    setErrors({}); // Clear errors
  };
  
  return (
    <div className="post-page">
      <header>
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
      </header>


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
        <div className="poverlay">
          <div className="post-popup">
            {/* Close button in top-right corner */}
            <button className="pclose-button" onClick={() => setSelectedPost(null)}>✖</button>
            
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
            <button className="review-button">
              Leave a Comments
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
