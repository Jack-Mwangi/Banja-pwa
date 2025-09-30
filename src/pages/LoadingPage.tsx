import React, { useState, useEffect } from 'react'
import { LoadingSpinner } from '../components/shared'

const LoadingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a small delay before showing the loading page
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loading-page ${isVisible ? 'visible' : ''}`}>
      {/* Abstract background shapes */}
      <div className="abstract-shape-1"></div>
      <div className="abstract-shape-2"></div>
      <div className="loading-content">
        <LoadingSpinner size="lg" />
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingPage