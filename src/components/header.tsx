import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header className="nav-bar">
    <div>
      <h3 className="nav-brand">
        <Link to="/">{siteTitle}</Link>
      </h3>
      <h3 className="nav-page-link">
        <Link to="/about">about</Link>
      </h3>
      <h3 className="nav-page-link">
        <Link to="/talks">talks</Link>
      </h3>
    </div>
  </header>
)

export default Header
