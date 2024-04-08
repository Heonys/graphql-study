import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import worker from './mock/worker.ts';
import './index.css';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!) //
  .render(
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </QueryClientProvider>,
  );
