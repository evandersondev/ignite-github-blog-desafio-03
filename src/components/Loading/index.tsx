import { SpinnerCircularFixed } from 'spinners-react'
import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <SpinnerCircularFixed
        color="#3294F8"
        secondaryColor="#1C2F41"
        speed={200}
      />
    </LoadingContainer>
  )
}
