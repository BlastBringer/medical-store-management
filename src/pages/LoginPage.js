import React from "react";
import "../components/LoginPage.css";

const LoginPage = () => {
    return (
      <div className="login-page">
        <video autoPlay loop muted className="background-video">
        <source src="/pills.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h2>Login to RR's Pharmacy</h2>
        <form className="login-form">
          <label>
            Username:
            <input type="text" name="username" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;