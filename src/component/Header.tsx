import React from 'react';
import styles from '../style/Header.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Header() {
  return <header className={hs('header')}>헤더입니다</header>;
}

export default Header;
