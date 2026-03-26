import "./Adminlogin.css";
import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      console.log('Logging in with:', email, password);
      // TODO: Add login API call
    } else {
      console.log('Signing up with:', username, email, password);
      // TODO: Add signup API call
    }
  };

  return (
      <div className="auth-page">
    <div className="auth-container">


      <form className="auth-form" onSubmit={handleSubmit} aria-label={isLogin ? "Login Form" : "Signup Form"}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              aria-label="Username"
            />
            <label htmlFor="username">Username</label>
          </div>
        )}

        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            aria-label="Email"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={isLogin ? "current-password" : "new-password"}
            aria-label="Password"
          />
          <label htmlFor="password">Password</label>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Create Account'}
        </button>

        <div className="toggle-link">
          <p>{isLogin ? "Don't have an account?" : 'Already have an account?'}</p>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-btn"
            aria-label="Toggle Login/Signup"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;

