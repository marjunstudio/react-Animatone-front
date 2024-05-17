import React, { useContext } from 'react';
import { auth, googleProvider } from '../../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthContext';

import SecondaryButton from './SecondaryButton';

const GoogleAuthButton: React.FC = () => {
  const authContext = useContext(AuthContext);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      localStorage.setItem('authToken', token);
      authContext?.login();

      const response = await fetch('http://localhost:8000/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* TODO:ここのデザインをよくみるやつに変更する */}
      <SecondaryButton text='Googleログイン' onClick={signInWithGoogle} />
    </div>
  );
};

export default GoogleAuthButton;
