import React, { useEffect, useRef, useState } from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const hs = classNames.bind(styles);

function Header({
  setMenuBoxVisible,
  homeOutlineBottom,
  homeProjectsBottom,
}: {
  setMenuBoxVisible: React.Dispatch<React.SetStateAction<boolean>>;
  homeOutlineBottom: undefined | number;
  homeProjectsBottom: undefined | number;
}) {
  const [headerStyle, setHeaderStyle] = useState<undefined | string>(undefined); // header 스타일
  const [headerLocalNavigationStyle, setHeaderLocalNavigationStyle] = useState<undefined | string>(undefined); // headerLocalNavigation 스타일
  const [headerLocalNavigationContentsStyle, setHeaderLocalNavigationContentsStyle] = useState<undefined | string>(undefined); // header 스타일
  const [outlineStyle, setOutlineStyle] = useState<undefined | string>(undefined);
  const [projects, setProjectsStyle] = useState<undefined | string>(undefined);
  const [informations, setInformationsStyle] = useState<undefined | string>(undefined);

  const headerRef = useRef<HTMLElement | null>(null);

  // 맨위로 스크롤 하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // 활성화된 content 하이라트 적용
  useEffect(() => {
    if (homeOutlineBottom && homeProjectsBottom) {
      if (homeOutlineBottom > 0) {
        setOutlineStyle('active-content');
        setProjectsStyle(undefined);
        setInformationsStyle(undefined);
      } else if (homeProjectsBottom > 0) {
        setOutlineStyle(undefined);
        setProjectsStyle('active-content');
        setInformationsStyle(undefined);
      } else {
        setOutlineStyle(undefined);
        setProjectsStyle(undefined);
        setInformationsStyle('active-content');
      }
    }
  }, [homeOutlineBottom, homeProjectsBottom]);
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
            <a
              href='#outline'
              onClick={() => {
                setOutlineStyle('active-content');
                setProjectsStyle(undefined);
                setInformationsStyle(undefined);
              }}>
              <div className={hs(outlineStyle)}>개요</div>
            </a>
            <a
              href='#projects'
              onClick={() => {
                setOutlineStyle(undefined);
                setProjectsStyle('active-content');
                setInformationsStyle(undefined);
              }}>
              <div className={hs(projects)}>프로젝트</div>
            </a>
            <a
              href='#informations'
              onClick={() => {
                setOutlineStyle(undefined);
                setProjectsStyle(undefined);
                setInformationsStyle('active-content');
              }}>
              <div className={hs(informations)}>정보</div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
