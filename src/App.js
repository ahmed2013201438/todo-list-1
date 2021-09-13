import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import View from './pages/View';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View />
    </QueryClientProvider>
  );
}

export default App;
