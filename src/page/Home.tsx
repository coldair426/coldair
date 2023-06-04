import React from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Home() {
  return (
    <div className={hs('home')}>
      <div className={hs('home__hello')}>
        <img className={hs('home__hello--img')} src='/img/profile.png' alt='profile-of-me' />
      </div>
    </div>
  );
}

export default Home;
