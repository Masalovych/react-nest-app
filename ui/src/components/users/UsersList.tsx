import {useQuery} from '@tanstack/react-query'
import { getAll } from '../../api/users'

function UsersList() {
  const { isPending, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: getAll,
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.email}>{`${user.firstName} ${user.email}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList