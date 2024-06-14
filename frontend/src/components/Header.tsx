import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header'>
        <h1>Simple Feedback Management System</h1>
        <h4>Welcome to the simple feedback app. You can submit and access all the records</h4>
    </div>
  );
};

export default Header;