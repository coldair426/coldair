import React, { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import MenuBox from './component/MenuBox';

function App() {
  const [menuBoxVisible, setMenuBoxVisible] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  const [homeOutlineBottom, setHomeOutlineBottom] = useState<undefined | number>(0);
  const [homeProjectsBottom, setHomeProjectsBottom] = useState<undefined | number>(0);

  // 메뉴 창이 켜진 상태에서 너비 늘릴(너비가 832px 초과시) 때 자동꺼짐
  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
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
      <Header setMenuBoxVisible={setMenuBoxVisible} homeOutlineBottom={homeOutlineBottom} homeProjectsBottom={homeProjectsBottom} />
      {menuBoxVisible && <MenuBox setMenuBoxVisible={setMenuBoxVisible} />}
      <Routes>
        <Route path='/' element={<Home windowInnerWidth={windowInnerWidth} setHomeOutlineBottom={setHomeOutlineBottom} setHomeProjectsBottom={setHomeProjectsBottom} />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
