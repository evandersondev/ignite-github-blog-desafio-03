import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 7.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    flex: 1;
    height: 50px;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }
  }
`
