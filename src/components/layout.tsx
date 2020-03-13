import React from 'react'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './googleFonts.css'
import favicon from '../images/favicon.png'

const Layout: React.FC = ({ children }) => {
  //   query={graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `}

  const data = {
    site: {
      siteMetadata: {
        title: 'kanej',
      },
    },
  }

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: "John Kane's Site" },
          { name: 'keywords', content: 'kanej' },
          { name: 'author', content: 'John Kane' },
        ]}
      >
        <html lang="en" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <div>
        <div className="page-header">
          <Header siteTitle={data.site.siteMetadata.title} />
        </div>
        <div className="page-container">
          <main>{children}</main>
          <footer>
            <p>
              © 2009-2020 John Kane - made from pure bits I siphoned from a
              Scottish stream
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
