import React from 'react'
import { graphql  } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <h2>{page.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: {regex: "/pages\\/about.md/"}) {
      frontmatter {
        title
      }
      html
    }    
  }
`
