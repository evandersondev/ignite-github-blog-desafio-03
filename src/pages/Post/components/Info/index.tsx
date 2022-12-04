import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faComment,
  faUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterInfo, HeaderInfo, InfoContainer } from './styles'
import { IPost } from '../../../Home'

interface InfoProps {
  post: IPost
}

export function Info({ post }: InfoProps) {
  return (
    <InfoContainer>
      <HeaderInfo>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <a href={post.html_url} target="_blank" rel="noopener noreferrer">
          VER NO GITHUB
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </HeaderInfo>

      <h1>JavaScript data types and data structures</h1>

      <FooterInfo>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBr,
          })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {post.comments <= 0
            ? `${post.comments} comentário`
            : `${post.comments} comentários`}
        </span>
      </FooterInfo>
    </InfoContainer>
  )
}
