import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const divStyle = {
    backgroundColor: 'green'
  };
  return (
    <div style={divStyle}>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}:</strong> {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
