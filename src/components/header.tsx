import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [toggleState, setToggleState] = useState<boolean>(true)

  const handleToggleMenu = useCallback(() => {
    setToggleState(!toggleState)
  }, [setToggleState, toggleState])

  return (
    <header className="nav-bar">
      <div>
        <span className="nav-bar-toggle" onClick={handleToggleMenu}>
          <i className="fa fa-bars"></i>
        </span>
        <div className="nav-brand-wrapper">
          <h3 className="nav-brand">
            <Link to="/">{siteTitle}</Link>
          </h3>
        </div>
      </div>
      <ul className={toggleState ? 'hide' : ''}>
        <li onClick={handleToggleMenu}>
          <Link className="nav-page-link" to="/posts">
            posts
          </Link>
        </li>
        <li onClick={handleToggleMenu}>
          <Link className="nav-page-link" to="/talks">
            talks
          </Link>
        </li>
        <li onClick={handleToggleMenu}>
          <Link className="nav-page-link" to="/about">
            about
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
