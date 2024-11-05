import React from 'react';
import '../components/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="homepage">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/pills.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Welcome Text and Login Button */}
      <div className="content">
        <h1>Welcome to RR's Pharmacy</h1>
        <button className="login-button" onClick={handleLogin}>
          Login or Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
