import React from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Header() {
  return (
    <header className={hs('header')}>
      <nav className={hs('header__global-navigation')}>
        <div className={hs('header__global-navigation--contents')}>
          <img className={hs('header__global-navigation--logo')} src='/logo192.png' alt='logo' />
          <div className={hs('header__global-navigation--contents-wrapper')}></div>
        </div>
      </nav>
      <nav className={hs('header__local-navigation')}></nav>
    </header>
  );
}

export default Header;
