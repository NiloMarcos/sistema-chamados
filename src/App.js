
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import AuthProvider from './Contexts/auth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
