import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/shared/ThemeToggle'
import '../styles/LandingPage.css'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animations on load
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }

  return (
    <div className="landing-page">
      {/* Abstract background shapes */}
      {[...Array(25)].map((_, index) => (
        <div key={index} className={`abstract-shape shape-${index + 1} ${isVisible ? 'visible' : ''}`}></div>
      ))}
      
      {/* Navigation */}
      <nav className="landing-nav glass">
        <div className="nav-brand">
          <img src="/brand.png" alt="Banja" className="brand-logo" />
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button 
            className="btn btn-primary get-started-btn"
            onClick={handleGetStarted}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Get Started'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`hero-content glass ${isVisible ? 'slide-in' : ''}`}>
          <div className="hero-text">
            <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>Welcome to Banja</h1>
            <p className={`hero-subtitle ${isVisible ? 'fade-in delay-1' : ''}`}>
              Connect, share, and discover with our community platform
            </p>
            <button 
              className="btn btn-secondary floating-btn bounce"
              onClick={handleGetStarted}
              disabled={isLoading}
            >
              Join Us
            </button>
          </div>
          <div className="hero-image">
            <img src="/assets/welcome.jpeg" alt="Welcome to Banja" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>About BANJA</h2>
          <div className="about-content">
            <div className="about-text">
              <p className={`about-description ${isVisible ? 'fade-in delay-2' : ''}`}>
                BANJA is built for students and communities to connect, trade, and thrive together. 
                Our goal is to make access and exchange seamless and trustworthy.
              </p>
            </div>
            <div className="about-illustration">
              <div className="abstract-illustration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-container">
          <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>How It Works</h2>
          <div className="steps-container">
            <div className={`step-card ${isVisible ? 'slide-up delay-1' : ''}`}>
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3>Sign Up</h3>
              <p>Create your account and profile</p>
            </div>
            <div className={`step-card ${isVisible ? 'slide-up delay-2' : ''}`}>
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3>Explore the Marketplace</h3>
              <p>Browse and discover items and services</p>
            </div>
            <div className={`step-card ${isVisible ? 'slide-up delay-3' : ''}`}>
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>Connect & Trade</h3>
              <p>Connect with others and make trades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>Why Choose BANJA</h2>
          <div className="features-grid">
            <div className={`feature-card ${isVisible ? 'slide-up delay-1' : ''}`}>
              <h3>Trusted Community</h3>
              <p>Verified users and secure transactions</p>
            </div>
            <div className={`feature-card ${isVisible ? 'slide-up delay-2' : ''}`}>
              <h3>Seamless Experience</h3>
              <p>Easy-to-use interface for all your needs</p>
            </div>
            <div className={`feature-card ${isVisible ? 'slide-up delay-3' : ''}`}>
              <h3>Safe & Secure</h3>
              <p>End-to-end encryption and privacy protection</p>
            </div>
            <div className={`feature-card ${isVisible ? 'slide-up delay-4' : ''}`}>
              <h3>Built for Students</h3>
              <p>Designed specifically for student needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>Get BANJA on the Go</h2>
          <p className={`cta-subtitle ${isVisible ? 'fade-in delay-1' : ''}`}>
            Join thousands already using BANJA. Download now and experience the future of student marketplaces.
          </p>
          <div className="cta-buttons">
            <button className="cta-button bounce-vertical">
              <div className="button-content">
                <div className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="button-text">
                  <span className="button-label">GET IT ON</span>
                  <span className="button-title">Google Play</span>
                </div>
              </div>
            </button>
            <button className="cta-button bounce-vertical">
              <div className="button-content">
                <div className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="button-text">
                  <span className="button-label">Download on the</span>
                  <span className="button-title">App Store</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Marketplace</a>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
          <div className="social-icons">
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
          <p className="copyright">© 2025 BANJA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage