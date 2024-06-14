import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedbackList.css'; 

interface Feedback {
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:2000/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks', error);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-list-container">
      <h2 className="feedback-list-heading">Feedback List</h2>
      <ul className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <li key={index} className="feedback-item">
            <strong>{feedback.name}:</strong> {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
