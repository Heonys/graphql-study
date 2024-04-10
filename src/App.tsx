import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SiginUp from './pages/SiginUp';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <main className="max-w-[650px] w-full mx-auto">
      <QueryClientProvider client={queryClient}>
        <SiginUp />
      </QueryClientProvider>
    </main>
  );
}

export default App;
