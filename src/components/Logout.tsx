import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Logout: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext?.logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
