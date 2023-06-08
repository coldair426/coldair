import React, { useEffect, useState } from 'react';
import styles from '../style/MenuBox.module.scss';
import classNames from 'classnames/bind';

const ms = classNames.bind(styles);

function MenuBox({ setMenuBoxVisible }: { setMenuBoxVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [mount, setMount] = useState(false);
  const menuBoxClose = () => {
    setMount(false);
    // transition 실행뒤에 언마운트
    setTimeout(() => {
      setMenuBoxVisible(false);
    }, 320);
  };

  useEffect(() => {
    setMount(true);
    return () => {
      setMount(false);
    };
  }, []);
  useEffect(() => {
    const wheelAndTouchEventStop = (e: WheelEvent | TouchEvent) => e.preventDefault(); // 기본기능 막는 함수
    window.addEventListener('wheel', wheelAndTouchEventStop, { passive: false });
    window.addEventListener('touchmove', wheelAndTouchEventStop, { passive: false });
    return () => {
      window.removeEventListener('wheel', wheelAndTouchEventStop);
      window.removeEventListener('touchmove', wheelAndTouchEventStop);
    };
  }, []);

  return (
    <>
      <div className={ms('menu-box__mask', mount && 'visible')} />
      <div className={ms('menu-box', mount && 'visible')}>
        <div className={ms('menu-box__menus')}>
          <div className={ms('menu-box__exit--wrapper')}>
            <button className={ms('menu-box__exit')} onClick={menuBoxClose}>
              <img src='/icon/menu-box-close-button.webp' alt='close-button' />
            </button>
          </div>
          <a className={ms('menu-box__menu')} href='https://velog.io/@coldair426'>
            Velog
            <img src='/icon/menu-box-select-button.webp' alt='selected-item' />
          </a>
          <a className={ms('menu-box__menu')} href='https://github.com/coldair426'>
            GitHub
            <img src='/icon/menu-box-select-button.webp' alt='selected-item' />
          </a>
          <a className={ms('menu-box__menu')} href='https://open.kakao.com/o/s7ZC0Rnf'>
            카카오톡
            <img src='/icon/menu-box-select-button.webp' alt='selected-item' />
          </a>
          <a className={ms('menu-box__menu')} href='mailto:coldair426@gmail.com'>
            Gmail
            <img src='/icon/menu-box-select-button.webp' alt='selected-item' />
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuBox;
