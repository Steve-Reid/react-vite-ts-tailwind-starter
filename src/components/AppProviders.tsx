import { BrowserRouter as Router } from 'react-router-dom';

interface AppProvidersProps {
  children: React.ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  return <Router>{children}</Router>;
}

export default AppProviders;
