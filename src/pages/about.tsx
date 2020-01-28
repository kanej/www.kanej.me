import React from 'react'

const AboutPage: React.FC = () => {
  const page = {
    frontmatter: {
      title: 'About',
    },
    html: 'Hello',
  }
  return (
    <div>
      <h2>{page.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  )
}

export default AboutPage
