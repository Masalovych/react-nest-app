import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Example from './components/Example'

import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

export default App
