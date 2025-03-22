import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically call your authentication API
  };

  const handleGoogleSignup = (isAuthority = false) => {
    console.log('Google signup initiated', isAuthority ? 'as authority' : 'as regular user');
    // Implement Google OAuth here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create an Account</h2>
          <p>Get started with our platform</p>
        </div>

        <div className="social-logins">
          <button 
            className="google-button"
            onClick={() => handleGoogleSignup(false)}
          >
            <div className="google-icon"></div>
            <span>Sign up with Google</span>
          </button>
          
          <button 
            className="google-button"
            onClick={() => handleGoogleSignup(true)}
          >
            <div className="google-icon"></div>
            <span>Authority Login with Google</span>
          </button>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToTerms">
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
            </label>
          </div>
          
          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>
        
        <div className="login-link">
          <p>
            Already have an account? 
            <a href="#login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;