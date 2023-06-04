import React, { useEffect, useRef } from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const hs = classNames.bind(styles);

function Header({ setMenuBoxVisible }: { setMenuBoxVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  const header = useRef<HTMLElement | null>(null);
  const headerLocalNavigation = useRef<HTMLElement | null>(null);
  const headerLocalNavigationContents = useRef<HTMLDivElement | null>(null);

  // 맨위로 스크롤 하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const test = () => {
      if (header.current && headerLocalNavigation.current && headerLocalNavigationContents.current) {
        if (window.scrollY >= header.current.offsetHeight) {
          header.current.style.transition = 'background-color 1s ease';
          headerLocalNavigation.current.style.transition = 'background-color 1s ease';
          headerLocalNavigationContents.current.style.boxShadow = 'none';
          headerLocalNavigation.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          header.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
          headerLocalNavigation.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
        } else {
          header.current.style.transition = 'background-color 1s ease';
          headerLocalNavigation.current.style.transition = 'background-color 1s ease';
          headerLocalNavigationContents.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
          headerLocalNavigation.current.style.boxShadow = 'none';
          header.current.style.backgroundColor = 'transparent';
          headerLocalNavigation.current.style.backgroundColor = 'transparent';
        }
      }
    };
    window.addEventListener('scroll', test);
    return () => {
      window.removeEventListener('scroll', test);
    };
  }, []);

  return (
    <>
      <header className={hs('header')} ref={header}>
        <nav className={hs('header__global-navigation')}>
          <div className={hs('header__global-navigation--contents')}>
            <Link to='/'>
              <img className={hs('header__global-navigation--logo')} src='/logo192.png' alt='logo' />
            </Link>
            <div className={hs('header__global-navigation--contents-wrapper', 'hidden-on-mobile')}>
              <a href='https://velog.io/@coldair426'>Velog</a>
              <a href='https://github.com/coldair426'>GitHub</a>
              <a href='https://open.kakao.com/o/s7ZC0Rnf'>카카오톡</a>
              <a href='mailto:coldair426@gmail.com'>Gmail</a>
            </div>
            <button
              className={hs('header__global-navigation--menu-button', 'hidden-on-desktop')}
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
            <div>소개</div>
            <div>프로젝트</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
