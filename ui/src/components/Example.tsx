import {useQuery} from '@tanstack/react-query'
import { getTodos } from '../api/todos'

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.map(todo => (
          <li key={todo.name}>{todo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Example