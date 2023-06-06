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
  const header = useRef<HTMLElement | null>(null);
  const headerLocalNavigation = useRef<HTMLElement | null>(null);
  const headerLocalNavigationContents = useRef<HTMLDivElement | null>(null);

  // 맨위로 스크롤 하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 스크롤에 따라 효과
  useEffect(() => {
    const headerStyleChange = () => {
      if (header.current && headerLocalNavigation.current && headerLocalNavigationContents.current) {
        if (window.scrollY >= header.current.offsetHeight) {
          headerLocalNavigationContents.current.style.boxShadow = 'none';
          headerLocalNavigation.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          header.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
          headerLocalNavigation.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
        } else {
          headerLocalNavigationContents.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          headerLocalNavigation.current.style.boxShadow = 'none';
          header.current.style.backgroundColor = 'transparent';
          headerLocalNavigation.current.style.backgroundColor = 'transparent';
        }
      }
    };
    window.addEventListener('scroll', headerStyleChange);
    return () => {
      window.removeEventListener('scroll', headerStyleChange);
    };
  }, []);
  // 리사이즈시 요소 높이 업데이트
  useEffect(() => {
    const heightUpdate = () => {
      if (header.current && headerLocalNavigation.current) {
        setHeaderGlobalNavHeight(header.current.offsetHeight);
        setHeaderLocalNavHeight(headerLocalNavigation.current.offsetHeight);
      }
    };
    heightUpdate(); // 최초 1회 실행
    window.addEventListener('resize', heightUpdate);
    return () => window.removeEventListener('resize', heightUpdate);
  }, [setHeaderGlobalNavHeight, setHeaderLocalNavHeight]);

  return (
    <>
      <header className={hs('header')} ref={header}>
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
      <nav className={hs('header__local-navigation')} ref={headerLocalNavigation}>
        <div className={hs('header__local-navigation--contents')} ref={headerLocalNavigationContents}>
          <button onClick={scrollToTop}>
            <div>
              <div className={hs('header__local-navigation--sub-title')}>Front-End Dev</div>
              <div className={hs('header__local-navigation--title')}>홍찬기</div>
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
              <div>사이트</div>
            </button>
            <button>
              <div>사이트</div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
