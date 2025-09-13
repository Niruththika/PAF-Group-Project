import React, { useState } from 'react';
import '../style/learningprograss.css';
import Header from "./header";
import Footer from "./footer";

const LearningPrograssPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    completedTutorials: '',
    newSkills: '',
    challengesOvercome: '',
    nextSteps: '',
    projectsFinished: '',
    progressUpdate: '',
    tags: '',
    saveAndUpdate: false
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="learning-page">

      <main className="main-content">
        <Header />
        {/* <div className="hero-section">
          <div className="hero-text">
            <h1>Tracking Your Learning Journey</h1>
            <p>Track and share your learning journey with the community!</p>
          </div>
          <div className="hero-image">
            <img src={StudentImage} alt="Student"/>
          </div>
        </div> */}

        <div className="form-container">
          <h2 className="form-title">"Share Your Learning Journey With Us!"</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name* :"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email* :"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="dropdown-container">
              <button 
                type="button" 
                className="dropdown-button" 
                onClick={toggleDropdown}
              >
                Completed Tutorials
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <textarea
                    name="completedTutorials"
                    placeholder="Completed Tutorials"
                    value={formData.completedTutorials}
                    onChange={handleInputChange}
                  ></textarea>
                  <textarea
                    name="newSkills"
                    placeholder="New Skills Learned"
                    value={formData.newSkills}
                    onChange={handleInputChange}
                  ></textarea>
                  <textarea
                    name="challengesOvercome"
                    placeholder="Challenges Overcome"
                    value={formData.challengesOvercome}
                    onChange={handleInputChange}
                  ></textarea>
                  <textarea
                    name="nextSteps"
                    placeholder="Next Steps"
                    value={formData.nextSteps}
                    onChange={handleInputChange}
                  ></textarea>
                  <textarea
                    name="projectsFinished"
                    placeholder="Projects Finished"
                    value={formData.projectsFinished}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              )}
            </div>
            <div className="form1-row">
              <input
                type="text"
                name="progressUpdate"
                placeholder="Enter your latest progress update..*"
                value={formData.progressUpdate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form2-row">
              <input
                type="text"
                name="tags"
                placeholder="Add Tags :"
                value={formData.tags}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="checkbox-container">
              <input
                type="checkbox"
                id="saveUpdate"
                name="saveAndUpdate"
                checked={formData.saveAndUpdate}
                onChange={handleInputChange}
              />
              <label htmlFor="saveUpdate">Save And Update</label>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-button">
                Post Update
              </button>
              <button type="button" className="edit-button">
                Edit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </main>

   
    </div>
  );
};

export default LearningPrograssPage;