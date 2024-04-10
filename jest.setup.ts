import '@testing-library/jest-dom';
import { server } from './src/mock/node';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});
afterAll(() => {
  server.close();
});
