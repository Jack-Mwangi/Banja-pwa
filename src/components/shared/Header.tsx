import React from 'react'
import '../../styles/Header.css'

interface HeaderProps {
  title: string
  subtitle?: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <header className={`header ${className}`}>
      <h1 className="header-title">{title}</h1>
      {subtitle && <p className="header-subtitle">{subtitle}</p>}
    </header>
  )
}

export default Header