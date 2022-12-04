import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  margin-top: -5.5rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
    margin-right: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`

export const HeaderProfile = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1.6;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: border-color 0.2s;
      border-color: ${({ theme }) => theme.blue};
    }

    svg {
      margin-left: 0.5rem;
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`

export const FooterProfile = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
