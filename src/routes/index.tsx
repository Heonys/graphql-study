import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import SiginUp from '@/pages/SiginUp';
import ErrorPage from '@/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <SiginUp /> }],
  },
]);

export default router;
