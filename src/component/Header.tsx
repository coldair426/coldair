import React from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Header() {
  return (
    <>
      <header className={hs('header')}>
        <nav className={hs('header__global-navigation')}>
          <div className={hs('header__global-navigation--contents')}>
            <img className={hs('header__global-navigation--logo')} src='/logo192.png' alt='logo' />
            <div className={hs('header__global-navigation--contents-wrapper', 'hidden-on-mobile')}>
              <a href='https://velog.io/@coldair426'>Velog</a>
              <a href='https://github.com/coldair426'>GitHub</a>
              <a href='https://open.kakao.com/o/s7ZC0Rnf'>카카오톡</a>
              <a href='mailto:coldair426@gmail.com'>Gmail</a>
            </div>
            <button className={hs('header__global-navigation--menu-button', 'hidden-on-desktop')}>ㅁ</button>
          </div>
        </nav>
      </header>
      <nav className={hs('header__local-navigation')}>
        <div className={hs('header__local-navigation--contents')}>
          <div>
            <div className={hs('header__local-navigation--sub-title')}>Front-End Developer</div>
            <div className={hs('header__local-navigation--title')}>홍찬기</div>
          </div>
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
