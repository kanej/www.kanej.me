import React from 'react'
import { graphql, Link  } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
        <header>
            <h2>Talks</h2>
        </header>
        <p>In case you wanted slides from a talk I have given, here they are, you poor misguided soul...</p>
        {data.allMarkdownRemark.edges.map(({ node }) => {
            const slidesLink = <Link key={`${node.frontmatter.title}-slides`} to="{node.frontmatter.slides}">slides</Link>
            const audioLink = node.frontmatter.audio
                ? <Link key={`${node.frontmatter.title}-audio`} to="{{node.frontmatter.audio}}">audio</Link>
                : null
            const talkLinks = node.frontmatter.audio
                ? [slidesLink, " | ", audioLink]
                : slidesLink

            return (
                <div key={node.frontmatter.title} className="talk-box">
                    <div className="talk-header">
                        <h3 style={{float: 'left'}}>{node.frontmatter.title}</h3>
                        
                        <div style={{float: 'right'}}>
                            <p>{node.frontmatter.date}</p>
                        </div>
                    </div>
                    <div className="talk-venue">
                        <h5>{node.frontmatter.venue}</h5>
                    </div>  
                    <div className="talk-content">
                        <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    </div>
                    <div className="talk-links">
                        {talkLinks}
                    </div>
                </div>
            )
        })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/talks/"}},
      sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM")
            venue
            slides
            audio
          }
          html
        }
      }
    }
  }
`