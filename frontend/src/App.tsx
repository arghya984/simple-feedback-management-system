import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
