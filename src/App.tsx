import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api';

const HelloButton: React.FC = () => {
  const handleClick = async () => {
    try {
      const response = await api.get('/');
      const data = response.data;
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('取得に失敗しました');
    }
  };

  return (
    <button className="bg-red-200" onClick={handleClick}>
      ボタン
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <HelloButton />
    </div>
  );
}

export default App;