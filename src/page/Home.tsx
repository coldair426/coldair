import React from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Home() {
  return <div className={hs('home')}></div>;
}

export default Home;
