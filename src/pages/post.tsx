import React, { useState, useEffect } from 'react'
import { useQuery } from '@scribalous/react-hooks'
import gql from 'graphql-tag'
import remark from 'remark'
import html from 'remark-html'
import remarkSlug from 'remark-slug'
import { useParams } from 'react-router-dom'

const postQuery = gql`
  query GET_POST($slug: String) {
    post(slug: $slug) {
      slug
      description
      body
    }
  }
`

const PostPage: React.FC = () => {
  let { slug } = useParams()
  const { loading, error, data } = useQuery(postQuery, {
    variables: { slug },
  })
  const [htmlContent, setHtmlContent] = useState<any>(undefined)

  useEffect(() => {
    if (loading || error) {
      return
    }

    if (
      htmlContent &&
      htmlContent.description === data.post.description &&
      htmlContent.raw === data.post.body
    ) {
      return
    }

    remark()
      .use(remarkSlug)
      .use(html)
      .process(data.post.body, (_err, file) => {
        setHtmlContent({
          description: data.post.description,
          body: file.contents,
          raw: data.post.body,
        })
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

  return (
    <div className="post-page">
      <h1>{htmlContent.description}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent.body }} />
    </div>
  )
}

export default PostPage
