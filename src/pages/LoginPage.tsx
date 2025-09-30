import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ThemeToggle from '../components/shared/ThemeToggle'
import '../styles/LoginPage.css'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { login, signup, googleLogin, isLoading } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    yearOfStudy: '',
    university: 'Muranga University of Technology'
  })
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password)
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match')
        }
        await signup(formData.name, formData.email, formData.password)
      }
      navigate('/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
      navigate('/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google login failed')
    }
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="login-page">
      {/* Abstract background shapes */}
      <div className="abstract-shape shape-1"></div>
      <div className="abstract-shape shape-2"></div>
      
      {/* Navigation */}
      <nav className="login-nav glass">
        <div className="nav-brand">
          <img src="/brand.png" alt="Banja" className="brand-logo" />
        </div>
        <div className="nav-actions">
          <button className="back-btn" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Login Form */}
      <div className="login-container">
        <div className="login-card glass">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          
          <div className="auth-options">
            <button 
              className={`auth-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
            <button 
              className={`auth-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required={!isLogin}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    required={!isLogin}
                  >
                    <option value="">Select Year of Study</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="postgraduate">Postgraduate</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="university"
                    placeholder="University"
                    value={formData.university}
                    onChange={handleInputChange}
                    required={!isLogin}
                    readOnly
                  />
                </div>
              </>
            )}
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {!isLogin && (
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                />
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary auth-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button 
            className="btn btn-secondary google-login-btn"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.8 10.5H12v3.5h5.6c-.3 1.7-1.3 3.1-2.8 4.1l2.7 2.1c1.6-1.5 2.6-3.7 2.6-6.2z"/>
              <path d="M12 22c3.3 0 6-1.1 8-3l-2.7-2.1c-1 1-2.4 1.7-4.3 1.7-3.3 0-6.1-2.2-7.1-5.2l-2.7 2.1C6.5 19.9 9 22 12 22z"/>
              <path d="M5.9 13.7c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.5H3.5C2.8 8.9 2.4 10.4 2.4 12s.4 3.1 1.1 4.5l2.4-1.8z"/>
              <path d="M12 4.8c1.7 0 3.2.6 4.4 1.8l3.2-3C18 1.9 15.2.8 12 .8 9 0 6.5.8 4.5 2.4l3.4 2.6c1-1 2.3-1.6 3.7-1.6z"/>
            </svg>
            Continue with Google
          </button>

          <p className="terms-text">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage