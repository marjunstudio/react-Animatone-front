import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import SecondaryButton from './SecondaryButton';

const LogoutButton: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext?.logout();
  };

  return (
    <div>
      <SecondaryButton text='ログアウト' onClick={handleLogout} />
    </div>
  );
};

export default LogoutButton;
