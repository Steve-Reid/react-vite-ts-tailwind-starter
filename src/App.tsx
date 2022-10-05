import { Route, Routes } from 'react-router-dom';
import AppProviders from './components/AppProviders';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <div>
      <h1 className="text-5xl">React Vite Starter</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
}
