import React from 'react'

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/talks/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date(formatString: "YYYY-MM")
//             venue
//             slides
//             audio
//           }
//           html
//         }
//       }
//     }
//   }
// `

const TalksPage: React.FC = () => {
  const talks = [
    {
      node: {
        frontmatter: {
          title: 'Example',
          venue: 'exeter',
          slides: '',
          audio: 'http:',
          date: '',
        },
        html: 'boom',
      },
    },
  ]

  return (
    <div>
      <header>
        <h2>Talks</h2>
      </header>
      <p>
        In case you wanted slides from a talk I have given, here they are, you
        poor misguided soul...
      </p>
      {talks.map(({ node }) => {
        const slidesLink = (
          <a
            key={`${node.frontmatter.title}-slides`}
            href={`${node.frontmatter.slides}`}
          >
            slides
          </a>
        )
        const audioLink = node.frontmatter.audio ? (
          <a
            key={`${node.frontmatter.title}-audio`}
            href={`${node.frontmatter.audio}`}
          >
            audio
          </a>
        ) : null
        const talkLinks = node.frontmatter.audio
          ? [slidesLink, ' | ', audioLink]
          : slidesLink

        return (
          <div key={node.frontmatter.title} className="talk-box">
            <div className="talk-header">
              <h3 style={{ float: 'left' }}>{node.frontmatter.title}</h3>

              <div style={{ float: 'right' }}>
                <p>{node.frontmatter.date}</p>
              </div>
            </div>
            <div className="talk-venue">
              <h5>{node.frontmatter.venue}</h5>
            </div>
            <div className="talk-content">
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
            <div className="talk-links">{talkLinks}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TalksPage