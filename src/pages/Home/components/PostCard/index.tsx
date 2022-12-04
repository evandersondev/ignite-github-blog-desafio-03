import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { IPost } from '../..'
import { HeaderPostCard, PostCardContainer } from './styles'

interface PostCardProps {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  function handleOpenPostById() {
    navigate(`/post/${post.number}`, { state: post })
  }

  return (
    <PostCardContainer onClick={handleOpenPostById}>
      <HeaderPostCard>
        <h2>{post.title}</h2>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBr,
          })}
        </span>
      </HeaderPostCard>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
