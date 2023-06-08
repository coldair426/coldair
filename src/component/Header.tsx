import React, { useEffect, useRef, useState } from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const hs = classNames.bind(styles);

function Header({ setMenuBoxVisible }: { setMenuBoxVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [headerStyle, setHeaderStyle] = useState<undefined | string>(undefined); // header 스타일
  const [headerLocalNavigationStyle, setHeaderLocalNavigationStyle] = useState<undefined | string>(undefined); // headerLocalNavigation 스타일
  const [headerLocalNavigationContentsStyle, setHeaderLocalNavigationContentsStyle] = useState<undefined | string>(undefined); // header 스타일

  const headerRef = useRef<HTMLElement | null>(null);

  // 맨위로 스크롤 하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 스크롤에 따라 효과
  useEffect(() => {
    const headerStyleChange = () => {
      const userScrollY = window.scrollY; // 유저의 스크롤 높이
      const header = headerRef.current;
      if (header && userScrollY >= header.offsetHeight) {
        setHeaderStyle('action');
        setHeaderLocalNavigationStyle('action');
        setHeaderLocalNavigationContentsStyle(undefined);
      } else {
        setHeaderStyle(undefined);
        setHeaderLocalNavigationStyle(undefined);
        setHeaderLocalNavigationContentsStyle('action');
      }
    };
    headerStyleChange();
    window.addEventListener('scroll', headerStyleChange);
    return () => {
      window.removeEventListener('scroll', headerStyleChange);
    };
  }, []);

  return (
    <>
      <header className={hs('header', headerStyle)} ref={headerRef}>
        <nav className={hs('header__global-navigation')}>
          <div className={hs('header__global-navigation--contents')}>
            <Link to='/'>
              <img className={hs('header__global-navigation--logo')} src='/icon/logo192.webp' alt='logo' />
            </Link>
            <div className={hs('header__global-navigation--contents-wrapper', 'hidden-on-header-mobile')}>
              <a href='https://velog.io/@coldair426'>벨로그</a>
              <a href='https://github.com/coldair426'>깃허브</a>
              <a href='https://open.kakao.com/o/s7ZC0Rnf'>카카오톡</a>
              <a href='mailto:coldair426@gmail.com'>메일</a>
            </div>
            <button
              className={hs('header__global-navigation--menu-button', 'hidden-on-header-desktop')}
              onClick={() => {
                setMenuBoxVisible(true);
              }}>
              <img src='/icon/header-menu-button.webp' alt='menu-open-button' />
            </button>
          </div>
        </nav>
      </header>
      <nav className={hs('header__local-navigation', headerLocalNavigationStyle)}>
        <div className={hs('header__local-navigation--contents', headerLocalNavigationContentsStyle)}>
          <button onClick={scrollToTop}>
            <div>
              <div className={hs('header__local-navigation--sub-title')}>Front-End Dev</div>
              <div className={hs('header__local-navigation--title')}>
                홍찬기<span>(Chanki)</span>
              </div>
            </div>
          </button>
          <div className={hs('header__local-navigation--contents-wrapper')}>
            <button>
              <div>개요</div>
            </button>
            <button>
              <div>프로젝트</div>
            </button>
            <button>
              <div>정보</div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
