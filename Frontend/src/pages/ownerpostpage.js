import React, { useState } from 'react';
import "../style/ownerpostpage.css";
import { FaSearch, FaUser, FaEdit, FaTrash } from "react-icons/fa";
import edulogo from "../images/edulogo.png";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const PostPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Open form for adding or editing a post
  const handleOpenForm = (post = null) => {
    if (post) {
      setEditingPost(post);
      setTitle(post.title);
      setCategory(post.category);
      setDuration(post.duration);
      setDescription(post.description);
      setFile(null); 
    } else {
      setEditingPost(null);
      setTitle("");
      setCategory("");
      setDuration("");
      setDescription("");
      setFile(null);
    }
    setShowForm(true);
  };

  // Close the form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingPost(null);
  };

  // Submit new or edited post
  const handleSubmit = () => {
    if (!title || !category || !duration || !description) {
      alert("All fields are required");
      return;
    }

    if (editingPost) {
      setPosts(prevPosts => prevPosts.map(post => 
        post.id === editingPost.id ? { ...post, title, category, duration, description } : post
      ));
    } else {
      const newPost = {
        id: posts.length + 1,
        title,
        category,
        duration,
        description,
        image: file ? URL.createObjectURL(file) : "" 
      };
      setPosts([...posts, newPost]);
    }

    setShowForm(false);
  };

  // Delete post
  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="post-page">
      <Header />

      <div className="content">
        <button className="aadd-post-button" onClick={() => handleOpenForm()}>Add New Post</button>

        {showForm && (
          <div className="aaoverlay">
            <div className="aadd-post-form">
              <nbutton className="cclose-button" onClick={handleCloseForm}>✖</nbutton>
              <h2>{editingPost ? "Edit Post" : "Add New Post"}</h2>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Coding">Coding</option>
                <option value="Photography">Photography</option>
                <option value="Cooking">Cooking</option>
                <option value="DIY Crafts">DIY Crafts</option>
                <option value="Others">Others</option>
              </select>
              <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
              <button onClick={handleSubmit}>{editingPost ? "Update Post" : "Add Post"}</button>
            </div>
          </div>
        )}

        <main className="aposts">
          {posts.map(post => (
            <article className="post" key={post.id}>
              <h2>{post.title}</h2>
              {post.image && <img src={post.image} alt={post.title} />}
              <p>{post.category} - {post.duration}</p>
              <p>{post.description}</p>
              <div className="post-actions">
                <FaEdit className="edit-icon" onClick={() => handleOpenForm(post)} />
                <FaTrash className="delete-icon" onClick={() => handleDelete(post.id)} />
              </div>
            </article>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PostPage;
