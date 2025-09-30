import React from 'react'
import './LoadingSpinner.css'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'var(--primary-color)'
}) => {
  return (
    <div className={`loading-spinner ${size}`} style={{ '--spinner-color': color } as React.CSSProperties}>
      <div className="spinner-ring"></div>
    </div>
  )
}

export default LoadingSpinner 