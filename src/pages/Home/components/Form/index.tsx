import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormContainer } from './styles'

interface FormProps {
  postsQuantity: number
  fecthPosts: (query?: string) => Promise<void>
}

const searchFormSchema = z.object({
  query: z.string(),
})

export type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Form({ postsQuantity, fecthPosts }: FormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fecthPosts(data.query)
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <strong>Publicações</strong>
        <span>
          {postsQuantity} {postsQuantity <= 1 ? 'publicação' : 'publicações'}
        </span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormContainer>
  )
}
