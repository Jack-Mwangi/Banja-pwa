import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import '../../styles/Navbar.css'

interface NavbarProps {
  variant?: 'landing' | 'home'
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'landing' }) => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  return (
    <nav className={`navbar glass navbar-${variant}`}>
      <div className="nav-brand">
        <img src="/brand.png" alt="Banja" className="brand-logo" />
      </div>
      <div className="nav-actions">
        <ThemeToggle />
        {variant === 'landing' && (
          <button 
            className="btn btn-primary get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar