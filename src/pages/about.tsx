import React, { useEffect, useState } from 'react'
import { useQuery } from '@scribalous/react-hooks'
import gql from 'graphql-tag'
import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'

const aboutPageQuery = gql`
  query GET_ABOUT_PAGE {
    page(slug: "about") {
      slug
      body
    }
  }
`

const AboutPage: React.FC = () => {
  const { loading, error, data } = useQuery(aboutPageQuery)
  const [htmlContent, setHtmlContent] = useState<any>(undefined)

  useEffect(() => {
    if (loading || error) {
      return
    }

    remark()
      .use(slug)
      .use(html)
      .process(data.page.body, (_err, file) => {
        setHtmlContent(file.contents)
      })
  }, [loading, error, data, htmlContent])

  if (error) {
    return (
      <div>
        <p>Error loading page</p>
      </div>
    )
  }

  if (loading || !htmlContent) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  console.log()

  return (
    <div>
      <h2>About</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default AboutPage
