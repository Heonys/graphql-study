import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import worker from './mock/worker.ts';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  await worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.createRoot(document.getElementById('root')!) //
  .render(<RouterProvider router={router} />);
