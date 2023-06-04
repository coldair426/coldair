import React, { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import MenuBox from './component/MenuBox';

function App() {
  const [menuBoxVisible, setMenuBoxVisible] = useState(false);

  // 너비가 832px 초과 => 데스크탑
  useEffect(() => {
    const handleResize = () => {
      if (menuBoxVisible === true) {
        window.innerWidth > 832 && setMenuBoxVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuBoxVisible]);

  return (
    <>
      <Reset />
      <Header setMenuBoxVisible={setMenuBoxVisible} />
      {menuBoxVisible && <MenuBox setMenuBoxVisible={setMenuBoxVisible} />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
