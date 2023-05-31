import React from 'react';
import { Reset } from 'styled-reset';
import './style/App.css';

function App() {
  return (
    <>
      <Reset />
      <div className='App'>
        <header className='App-header'>
          <img src='/img/profile.png' className='App-logo' alt='logo' />
          <p>홍찬기의 포트폴리오</p>
        </header>
      </div>
    </>
  );
}

export default App;
