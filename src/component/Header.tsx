import React, { useEffect, useRef } from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const hs = classNames.bind(styles);

function Header({
  setMenuBoxVisible,
  setHeaderGlobalNavHeight, // 헤더 글로벌 네비바 높이저장하는 스테이트
  setHeaderLocalNavHeight, // 헤더 로컬 네비바 높이저장하는 스테이트
}: {
  setMenuBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setHeaderGlobalNavHeight: React.Dispatch<React.SetStateAction<number>>;
  setHeaderLocalNavHeight: React.Dispatch<React.SetStateAction<number>>;
}) {
  const headerRef = useRef<HTMLElement | null>(null);
  const headerLocalNavigationRef = useRef<HTMLElement | null>(null);
  const headerLocalNavigationContentsRef = useRef<HTMLDivElement | null>(null);

  // 맨위로 스크롤 하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 리사이즈시 요소 높이 업데이트
  useEffect(() => {
    const heightUpdate = () => {
      const header = headerRef.current;
      const headerLocalNavigation = headerLocalNavigationRef.current;
      if (header && headerLocalNavigation) {
        setHeaderGlobalNavHeight(header.offsetHeight);
        setHeaderLocalNavHeight(headerLocalNavigation.offsetHeight);
      }
    };
    heightUpdate(); // 최초 1회 실행
    window.addEventListener('resize', heightUpdate);
    return () => window.removeEventListener('resize', heightUpdate);
  }, [setHeaderGlobalNavHeight, setHeaderLocalNavHeight]);
  // 스크롤에 따라 효과
  useEffect(() => {
    const headerStyleChange = () => {
      const userScrollY = window.scrollY; // 유저의 스크롤 높이
      const header = headerRef.current;
      const headerLocalNavigation = headerLocalNavigationRef.current;
      const headerLocalNavigationContents = headerLocalNavigationContentsRef.current;
      if (header && headerLocalNavigation && headerLocalNavigationContents) {
        if (userScrollY >= header.offsetHeight) {
          headerLocalNavigationContents.style.boxShadow = 'none';
          headerLocalNavigation.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          header.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
          headerLocalNavigation.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
        } else {
          headerLocalNavigationContents.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          headerLocalNavigation.style.boxShadow = 'none';
          header.style.backgroundColor = 'transparent';
          headerLocalNavigation.style.backgroundColor = 'transparent';
        }
      }
    };
    window.addEventListener('scroll', headerStyleChange);
    return () => {
      window.removeEventListener('scroll', headerStyleChange);
    };
  }, []);

  return (
    <>
      <header className={hs('header')} ref={headerRef}>
        <nav className={hs('header__global-navigation')}>
          <div className={hs('header__global-navigation--contents')}>
            <Link to='/'>
              <img className={hs('header__global-navigation--logo')} src='/logo192.png' alt='logo' />
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
              <img src='/icon/header-menu-button.png' alt='menu-open-button' />
            </button>
          </div>
        </nav>
      </header>
      <nav className={hs('header__local-navigation')} ref={headerLocalNavigationRef}>
        <div className={hs('header__local-navigation--contents')} ref={headerLocalNavigationContentsRef}>
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
