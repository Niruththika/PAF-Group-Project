import React, { useState } from 'react';
import '../style/LearningPlan.css';
import libraryBg from '../images/LearningPlan.jpg';
import Header from '../pages/header';
import Footer from '../pages/footer';

const LearningPlan = () => {
  const [planData, setPlanData] = useState({
    title: '',
    subject: '',
    topics: '',
    resources: '',
    date: '',
    savePlan: false
  });
  
  const [errors, setErrors] = useState({});
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  const programmingLanguages = ['Python', 'Java', 'C++', 'C', 'JavaScript', 'PHP', 'C#'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPlanData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTopicSelect = (topic) => {
    setPlanData(prevState => ({
      ...prevState,
      topics: topic
    }));
    setIsTopicsOpen(false);
  };

  const toggleDropdown = () => {
    setIsTopicsOpen(!isTopicsOpen);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!planData.title.trim()) newErrors.title = 'Title is required';
    if (!planData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!planData.topics.trim()) newErrors.topics = 'Topic selection is required';
    if (!planData.resources.trim()) newErrors.resources = 'Resources cannot be empty';
    if (!planData.date.trim()) {
      newErrors.date = 'Date is required';
    } else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(planData.date)) {
      newErrors.date = 'Invalid date format (MM/DD/YYYY)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitted plan:', planData);
      // Here you would typically send the data to an API
    }
  };

  return (
    <div className="lpl__container">
      <Header />
      {/* <div className="lpl__header" style={{ backgroundImage: `url(${libraryBg})` }}>
        <div className="lpl__header-content">
          <h1 className="lpl__title">Learning Plan Sharing</h1>
          <p className="lpl__subtitle">Track and share your learning journey with the community!</p>
        </div>
      </div> */}

      <div className="lpl__form-container">
        <h2 className="lpl__form-title">Learning Plan Sharing</h2>
        
        <form onSubmit={handleSubmit} className="lpl__form">
          <div className="lpl__form-row">
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleChange}
              placeholder="Plan Title"
              className="lpl__input"
            />
            {errors.title && <p className="error">{errors.title}</p>}
            
            <input
              type="text"
              name="subject"
              value={planData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="lpl__input"
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>
          
          <div className="lpl__form-row">
            <div className="lpl__dropdown">
              <div 
                className="lpl__dropdown-header" 
                onClick={toggleDropdown}
              >
                <input
                  type="text"
                  name="topics"
                  value={planData.topics}
                  readOnly
                  placeholder="Topics"
                  className="lpl__input lpl__dropdown-input"
                />
                <span className="lpl__dropdown-arrow">&#9662;</span>
              </div>
              {isTopicsOpen && (
                <ul className="lpl__dropdown-menu">
                  {programmingLanguages.map((language, index) => (
                    <li 
                      key={index} 
                      className="lpl__dropdown-item"
                      onClick={() => handleTopicSelect(language)}
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              )}
              {errors.topics && <p className="error">{errors.topics}</p>}
            </div>
          </div>
          
          <div className="lpl__form-row">
            <textarea
              name="resources"
              value={planData.resources}
              onChange={handleChange}
              placeholder="Add Resource Links Or References..."
              className="lpl__textarea"
            ></textarea>
            {errors.resources && <p className="error">{errors.resources}</p>}
          </div>
          
          <div className="lpl__form-row">
            <input
              type="text"
              name="date"
              value={planData.date}
              onChange={handleChange}
              placeholder="MM/DD/YYYY"
              className="lpl__input"
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          
          <div className="lpl__form-row lpl__checkbox-row">
            <label className="lpl__checkbox-label">
              <input
                type="checkbox"
                name="savePlan"
                checked={planData.savePlan}
                onChange={handleChange}
                className="lpl__checkbox"
              />
              Save Plan
            </label>
          </div>
          
          <div className="lpl__form-buttons">
            <button type="submit" className="lpl__button lpl__button-primary">Post Plan</button>
            <button type="button" className="lpl__button lpl__button-secondary">Edit</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default LearningPlan;
