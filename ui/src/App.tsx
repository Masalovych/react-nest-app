import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './App.css'
import UsersList from './components/users/UsersList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  )
}

export default App
