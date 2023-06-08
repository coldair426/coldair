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

  // 메뉴 창이 켜진 상태에서 너비 늘릴(너비가 832px 초과시) 때 자동꺼짐
  useEffect(() => {
    const handleResize = () => {
      if (menuBoxVisible === true) {
        window.innerWidth > 832 && setMenuBoxVisible(false);
      }
    };
    handleResize(); // 최초 1회 실행
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
