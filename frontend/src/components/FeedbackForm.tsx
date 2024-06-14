import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2000/feedback', { name, feedback });
      setName('');
      setFeedback('');
      setMessage('Thank you, your feedback has been recorded.');

      setTimeout(() => {
        setMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
          
    <form onSubmit={handleSubmit} className="form">
    <h3>Please enter your name and feedback</h3>
      <div>
        <label className="label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
      </div>
      <div>
        <label className="label">Feedback:</label>
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          className="input"
        />
      </div>
      <button type="submit" className="button">Submit Feedback</button>
      {message && <p className="message">{message}</p>}
    </form>
    
  );
};

export default FeedbackForm;
