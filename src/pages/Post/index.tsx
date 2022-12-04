import { useLocation } from 'react-router-dom'
import { IPost } from '../Home'
import { Content } from './components/Content'
import { Info } from './components/Info'
import { PostContainer } from './styles'

interface PostLocationType {
  state: IPost
}

export function Post() {
  const { state } = useLocation() as unknown as PostLocationType

  return (
    <PostContainer>
      <Info post={state} />
      <Content content={state.body} />
    </PostContainer>
  )
}
