import { useContext, useEffect, useState } from 'react'

import { Form } from './components/Form'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { HomeContainer, ListContainer } from './styles'
import { api } from '../../lib/api'
import { Loading } from '../../components/Loading'

export interface IPost {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  user: {
    login: string
  }
  comments: number
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])

  const [loading, setLoading] = useState(true)

  async function fecthPosts(query: string = '') {
    try {
      setLoading(true)
      const response = await api.get(
        `search/issues?q=${query}%20repo:evandersondev/ignite-github-blog-desafio-03`,
      )

      setPosts(response.data.items)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthPosts()
  }, [])

  const postsQuantity = posts.length

  return (
    <HomeContainer>
      <Profile />
      <Form fecthPosts={fecthPosts} postsQuantity={postsQuantity} />

      {loading ? (
        <Loading />
      ) : (
        <ListContainer>
          {posts.map((post) => {
            return <PostCard key={post.number} post={post} />
          })}
        </ListContainer>
      )}
    </HomeContainer>
  )
}
