import { useEffect, useState } from 'react';
import LoginPage from './login/login.jsx';
import ForgotPasswordPage from './login/forgot-password.jsx';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/login');
      setPath('/login');
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (path === '/forgot-password') {
    return <ForgotPasswordPage />;
  }

  return <LoginPage />;
}

export default App;
