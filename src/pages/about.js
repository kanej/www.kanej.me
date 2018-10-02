import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = ({data}) => {
  return (
    <Layout>
      <div className='content' dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      <Link to='/'>Back</Link>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: {regex : "/about.md/"}) {
      frontmatter {
        title
      }
      html
    }
  }
`
