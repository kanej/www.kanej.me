import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'John Kane\'s Personal Site' },
            { name: 'keywords', content: 'kanej' }
          ]}
        >
          <html lang='en' />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/brands.css' integrity='sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite' crossorigin='anonymous' />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css' integrity='sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7' crossorigin='anonymous' />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 600,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
          {children}
        </div>
        <footer style={{
          textAlign: 'center',
          color: 'grey'
        }}>
          <p>© 2009-2018 John Kane - made from pure bits I siphoned from a Scottish stream</p>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
