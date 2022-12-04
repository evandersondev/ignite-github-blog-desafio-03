import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FooterProfile, HeaderProfile, ProfileContainer } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'
import { Loading } from '../../../../components/Loading'

export interface IUser {
  name: string
  login: string
  bio: string
  avatar_url: string
  followers: number
  company: string
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState({} as IUser)
  const [loading, setLoading] = useState(true)

  async function fecthUserInfo() {
    try {
      setLoading(true)
      const response = await api.get(`/users/evandersondev`)

      setUser(response.data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fecthUserInfo()
  }, [])

  return (
    <ProfileContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <img src={user.avatar_url} alt="" />

          <section>
            <HeaderProfile>
              <h1>{user.name}</h1>

              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </HeaderProfile>

            <p>{user.bio}</p>

            <FooterProfile>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {user.login}
              </span>
              <span>
                <FontAwesomeIcon icon={faBuilding} />
                {user.company}
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                {user.followers}{' '}
                {user.followers === 1 ? 'seguidor' : 'seguidores'}
              </span>
            </FooterProfile>
          </section>
        </>
      )}
    </ProfileContainer>
  )
}
