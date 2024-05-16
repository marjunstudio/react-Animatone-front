import React, { useContext } from 'react';
import Login from './components/Login';
import AuthProvider, { AuthContext } from './contexts/AuthContext';
import Logout from './components/Logout';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Login />
      <Logout />
      <AuthConsumer />
    </AuthProvider>
  );
};

const AuthConsumer: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {authContext?.isLoggedIn ? <div>ログイン済み</div> : <div>未ログイン</div>}
    </div>
  );
};

export default App;
