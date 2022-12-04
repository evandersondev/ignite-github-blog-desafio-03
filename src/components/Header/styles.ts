import styled from 'styled-components'
import coverImage from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${coverImage}) no-repeat center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 6.125rem;
    margin-bottom: 5rem;
  }
`
