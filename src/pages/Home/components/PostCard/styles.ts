import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-height: 260px;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    transition: border-color 0.2s;
    border-color: ${({ theme }) => theme['base-label']};
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    font-size: 1rem;
    line-height: 1.6;
  }
`

export const HeaderPostCard = styled.header`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: baseline;
  margin-bottom: 1.25rem;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
    text-align: end;
  }
`
