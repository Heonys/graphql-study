import { Outlet } from 'react-router';

function App() {
  return (
    <main className="max-w-[650px] w-full mx-auto h-screen">
      <Outlet />
    </main>
  );
}

export default App;
