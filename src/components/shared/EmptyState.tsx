import React from 'react'
import '../../styles/EmptyState.css'

interface EmptyStateProps {
  title: string
  description: string
  actionText?: string
  onAction?: () => void
  mascot?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  actionText, 
  onAction,
  mascot = true
}) => {
  return (
    <div className="empty-state">
      {mascot && (
        <div className="mascot">
          <svg xmlns="http://www.w3.org/2000/svg" className="mascot-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )}
      <h3 className="empty-title">{title}</h3>
      <p className="empty-description">{description}</p>
      {actionText && onAction && (
        <button className="empty-action-btn" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  )
}

export default EmptyState