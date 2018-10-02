import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem'
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h3 style={{
        margin: 0,
        float: 'left'
      }}>
        <Link
          to='/'
          style={{
            color: 'black',
            textDecoration: 'none'
          }}>
          {siteTitle}
        </Link>
      </h3>
      <h3 style={{
        margin: 0,
        float: 'right'
      }}>
        <Link
          to='/about/'
          style={{
            color: 'black',
            textDecoration: 'none'
          }}>
          about
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
