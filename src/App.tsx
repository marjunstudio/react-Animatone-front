import React, { useContext } from 'react';

import AuthProvider, { AuthContext } from './contexts/AuthContext';
import Header from './components/organisms/Header';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Header />
      <AuthConsumer />
    </AuthProvider>
  );
};

// TODO:ヘッダーデザイン完成後削除
const AuthConsumer: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {authContext?.isLoggedIn ? <div>ログイン済み</div> : <div>未ログイン</div>}
    </div>
  );
};

export default App;
