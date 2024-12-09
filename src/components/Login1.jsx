import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the list of users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find if the user exists
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful!');
      navigate('/dishlist'); // Redirect to homepage or dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
