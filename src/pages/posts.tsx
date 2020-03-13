import React from 'react'
import { useQuery } from '@scribalous/react-hooks'
import gql from 'graphql-tag'
import { Post } from '@scribalous/ipld-cms'
import { Link } from 'react-router-dom'

const postsQuery = gql`
  query GET_POSTS {
    posts {
      slug
      description
      date
    }
  }
`

const PostsPage: React.FC = () => {
  const { loading, error, data } = useQuery(postsQuery)

  if (error) {
    return (
      <div>
        <p>Error loading page</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  const { posts } = data

  return (
    <div>
      <h2>Posts</h2>
      <div>
        <ul className="posts-list">
          {posts.map((p: Post, i: number) => (
            <li key={i}>
              <p>{p.date}</p>
              <Link to={`/posts/${p.slug}`}>{p.description}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PostsPage
