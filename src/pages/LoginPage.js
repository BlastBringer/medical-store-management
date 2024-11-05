import React, { useState } from "react";
import "../components/LoginPage.css";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple mock login logic
        if (username === "employee" && password === "password") {
            onLogin('employee');
        } else if (username === "customer" && password === "password") {
            onLogin('customer');
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
      <div className="login-page">
        <video autoPlay loop muted className="background-video" aria-hidden="true">
          <source src="/pills.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>Login to RR's Pharmacy</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Username:
            <input 
              type="text" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default LoginPage;
