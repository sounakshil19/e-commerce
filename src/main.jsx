import {
    // useQuery,
    // useMutation,
    // useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './Rdux-Toolkit/Store/Store.jsx'




const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
    <App />
    </Provider>
    </QueryClientProvider>
    

)
