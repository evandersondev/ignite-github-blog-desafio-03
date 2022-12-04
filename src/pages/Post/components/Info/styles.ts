import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  margin-top: -5.5rem;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }
`

export const HeaderInfo = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

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

export const FooterInfo = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
