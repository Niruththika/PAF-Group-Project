import React, { useState } from 'react';
import '../style/learningplan.css';
import Footer from "./footer";
import Header from "./header";

const LearningPlanForm = () => {
  const [planTitle, setPlanTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');
  const [resources, setResources] = useState('');
  const [date, setDate] = useState('');
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handlePostPlan = () => {
    console.log({
      planTitle,
      subject,
      topics,
      resources,
      date
    });
    alert('Plan posted successfully!');
  };

  const handleSavePlan = () => {
    setIsSaved(true);
    alert('Plan saved as draft!');
  };

  const handleEdit = () => {
    alert('Editing plan...');
  };

  return (
    <div>
    <div className="learning-plan-container-123">
        <Header />
      <div className="banner-123">
        <div className="banner-content-123">
          <h1>Learning Plan Sharing</h1>
          <p>Track and share your learning journey with the community!</p>
        </div>
      </div>

      <div className="form-container-123">
        <h2>Learning Plan Sharing</h2>

        <div className="form-group-123">
          <input
            type="text"
            placeholder="Plan Title"
            value={planTitle}
            onChange={(e) => setPlanTitle(e.target.value)}
            className="form-input-123"
          />
        </div>

        <div className="form-group-123">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-input-123"
          />
        </div>

        <div className="form-group-123">
          <div 
            className="dropdown-input-123" 
            onClick={() => setIsTopicsOpen(!isTopicsOpen)}
          >
            <input
              type="text"
              placeholder="Topics"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              className="form-input-123"
              onClick={(e) => e.stopPropagation()}
            />
            <span className="dropdown-arrow-123">▼</span>
          </div>
          {isTopicsOpen && (
            <div className="dropdown-menu-123">
              <div className="dropdown-item-123" onClick={() => {setTopics('Mathematics'); setIsTopicsOpen(false);}}>Mathematics</div>
              <div className="dropdown-item-123" onClick={() => {setTopics('Science'); setIsTopicsOpen(false);}}>Science</div>
              <div className="dropdown-item-123" onClick={() => {setTopics('Programming'); setIsTopicsOpen(false);}}>Programming</div>
              <div className="dropdown-item-123" onClick={() => {setTopics('Languages'); setIsTopicsOpen(false);}}>Languages</div>
              <div className="dropdown-item-123" onClick={() => {setTopics('Arts'); setIsTopicsOpen(false);}}>Arts</div>
            </div>
          )}
        </div>

        <div className="form-group-123">
          <textarea
            placeholder="Add Resource Links Or References..."
            value={resources}
            onChange={(e) => setResources(e.target.value)}
            className="form-textarea-123"
          ></textarea>
        </div>

        <div className="form-group-123">
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input-123"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
          />
        </div>

        <div className="save-option-123">
          <label>
            <input type="checkbox" checked={isSaved} onChange={() => setIsSaved(!isSaved)} />
            Save Plan
          </label>
        </div>

        <div className="form-buttons-123">
          <button className="post-button-123" onClick={handlePostPlan}>
            Post Plan
          </button>
          <button className="edit-button-123" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default LearningPlanForm;