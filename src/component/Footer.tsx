import React from 'react';
import styles from '../style/Footer.module.scss';
import classNames from 'classnames/bind';

const fs = classNames.bind(styles);

function Footer() {
  return <footer className={fs('footer')}>푸터입니다</footer>;
}

export default Footer;
