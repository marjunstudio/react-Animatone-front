import React, { useContext } from 'react';

import AuthProvider, { AuthContext } from './contexts/AuthContext';
import Header from './components/organisms/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/templates/LoginForm';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Router>
        <AuthConsumer />
      </AuthProvider>
    </>

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
