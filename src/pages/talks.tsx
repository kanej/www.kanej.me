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
          title: 'IPFS - Building a peer to peer Web',
          venue: 'Glasgow JS',
          slides:
            'https://ipfs.io/ipfs/QmbLGiQgKpbWv1ZyAGaaeRbFgRh4zrCxPfnzUkFKaHmBhM',
          audio: undefined,
          date: new Date('2017-11-01T19:00:48+01:00'),
        },
        html:
          'A general introduction to <a href="https://ipfs.io">IPFS</a> emphasising its permanence, censorship resistance and peer to peer nature.',
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Fixing the Web with the Interplanetary File System',
          venue: 'TechExeter Conference 2016',
          slides:
            'https://ipfs.io/ipfs/QmRoyxuDh1dVHP2ZRBimzSmV6LDZPe5oDzghVtyU2kZs87',
          audio:
            'https://soundcloud.com/techexeter/2016-track1-john-kane-fixing-the-web-with-the-ipfs',
          date: new Date('2016-10-08T10:00:00+01:00'),
        },
        html: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289707646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

          An introduction to <a href="https://ipfs.io">IPFS</a> for the TechExeter conference, focussing the problems with HTTP and the need to build out a decentralized web.`,
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Docker',
          venue: 'Exeter Techmeetup',
          slides: 'https://slides.com/kanej/docker',
          audio: undefined,
          date: new Date('2014-06-20T20:00:48+01:00'),
        },
        html:
          '<a href="https://www.docker.com/">Docker</a> from a web developers standpoint.',
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
                <p>{`${node.frontmatter.date.getFullYear()}-${node.frontmatter.date.getMonth() +
                  1}`}</p>
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
