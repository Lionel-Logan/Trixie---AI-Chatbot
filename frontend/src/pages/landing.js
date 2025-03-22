import React from 'react';
import './landing.css';

const Landing = () => {
    

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#37e666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#37e666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>Trixie<span>.</span></div>
            </div>
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#why-choose-trixie">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">For Educators</a>
              <a href="#">Blog</a>
            </div>
            <div className="nav-buttons">
              <button className="btn btn-outline">Log In</button>
              <button className="btn btn-primary" onClick={() => window.location.href = '/signup'}>Sign Up</button>
              
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Become a <span>Better Programmer</span> with AI-Powered Guidance</h1>
              <p>Trixie is an AI-powered Chrome extension and platform designed to enhance your coding skills through real-time guidance, performance tracking, and gamification.</p>
              <div className="nav-buttons">
                <button className="btn btn-primary">Install Chrome Extension</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <br></br>
              <img src="/image.png" alt="Trixie platform interface showing code assistance" />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="stats">
            <div className="stat-item">
              <h2>15K+</h2>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h2>92%</h2>
              <p>Interview Success Rate</p>
            </div>
            <div className="stat-item">
              <h2>500+</h2>
              <p>Educational Partners</p>
            </div>
          </div>

          <section className="features" id="why-choose-trixie" >
            <div className="section-title">
              <h2>Why Choose Trixie?</h2>
              <p>Supercharge your coding practice with features designed to help you master technical interviews and competitive programming</p>
            </div>

            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>AI-Powered Chatbot</h3>
                <p>Get personalized hints, explanations, and feedback for coding problems in real-time from our intelligent AI assistant.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>Real-Time Analytics</h3>
                <p>Track programming language usage, problem difficulty, completion time, and solution efficiency metrics.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏱</div>
                <h3>Custom Timers</h3>
                <p>Improve your time management by setting personalized time limits for problem-solving just like in real interviews.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"></div>
                <h3>Gamification</h3>
                <p>Stay motivated with achievements, daily streaks, and competitive leaderboards that make learning fun.</p>
              </div>
            </div>
          </section>

          <section className="testimonials">
            <div className="section-title">
              <h2>Success Stories</h2>
              <p>Hear from users who improved their coding skills and landed their dream jobs with Trixie</p>
            </div>

            <div className="testimonial-cards">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Trixie's AI assistant helped me understand complex algorithms I was struggling with. The performance tracking showed me where to focus, and I landed a job at Google after 3 months of practice!"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Daniel Johnson</h4>
                    <p>Software Engineer at Google</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"As a bootcamp instructor, Trixie has transformed how I teach algorithms. The admin dashboard gives me insights into student progress, and the custom quizzes help target weak areas."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>Olivia Garcia</h4>
                    <p>Lead Instructor, CodePath</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta" id="pricing">
            <h2>Ready to Transform Your Coding Journey?</h2>
            <p>Join thousands of students and professionals who have accelerated their programming skills and landed their dream jobs.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Started - It's Free</button>
              <button className="btn btn-outline">Book a Demo</button>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="logo footer-logo">
                <div>Trixie<span>.</span></div>
              </div>
              <p className="footer-description">AI-powered coding assistant that helps you master technical interviews and competitive programming with real-time guidance.</p>
            </div>
            <div className="footer-column">
              <h4>Platform</h4>
              <div className="footer-links">
                <a href="#">Features</a>
                <a href="#">For Educators</a>
                <a href="#">For Students</a>
                <a href="#">For Bootcamps</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <div className="footer-links">
                <a href="#">Documentation</a>
                <a href="#">API</a>
                <a href="#">Community</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2025 Trixie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;