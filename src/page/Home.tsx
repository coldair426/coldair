import React, { useEffect, useRef, useState } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Home({ headerGlobalNavHeight, headerLocalNavHeight }: { headerGlobalNavHeight: number; headerLocalNavHeight: number }) {
  const helloImg = useRef<HTMLImageElement>(null); // "안녕하세요."
  const profileImg = useRef<HTMLImageElement>(null); // "프로필사진."
  const helloPlaceHolder = useRef<HTMLDivElement>(null); // hello place holder

  const [helloPlaceHolderHeight, setHelloPlaceHolderHeight] = useState<number>(0);

  // useEffect(() => {
  // const headerStyleChange = () => {
  //   if (header.current && headerLocalNavigation.current && headerLocalNavigationContents.current) {
  //     if (window.scrollY >= header.current.offsetHeight) {
  //       headerLocalNavigationContents.current.style.boxShadow = 'none';
  //       headerLocalNavigation.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
  //       header.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
  //       headerLocalNavigation.current.style.backgroundColor = 'rgba(29, 29, 31, 0.9)';
  //     } else {
  //       headerLocalNavigationContents.current.style.boxShadow = '0px 1px 0px 0px rgba(255, 255, 255, 0.24)';
  //       headerLocalNavigation.current.style.boxShadow = 'none';
  //       header.current.style.backgroundColor = 'transparent';
  //       headerLocalNavigation.current.style.backgroundColor = 'transparent';
  //     }
  //   }
  // };
  // window.addEventListener('scroll', headerStyleChange);
  // return () => {
  //   window.removeEventListener('scroll', headerStyleChange);
  // };
  // }, []);
  useEffect(() => {
    // 플레이스홀더 높이 동적으로 계산
    const calculateHelloImgPlaceHolderHeight = () => {
      if (helloPlaceHolder.current && helloImg.current) {
        const placeholderHeight =
          (window.innerHeight - (headerGlobalNavHeight + headerLocalNavHeight) - helloImg.current.offsetHeight) / 2 + (headerGlobalNavHeight + headerLocalNavHeight);
        setHelloPlaceHolderHeight(placeholderHeight);
      }
    };
    calculateHelloImgPlaceHolderHeight();
    window.addEventListener('resize', calculateHelloImgPlaceHolderHeight);
    return () => {
      window.removeEventListener('resize', calculateHelloImgPlaceHolderHeight);
    };
  }, [headerGlobalNavHeight, headerLocalNavHeight]);
  useEffect(() => {
    const helloImgMovingEffect = () => {
      if (helloImg.current && profileImg.current) {
        // 높이변수
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const helloImgHeight = helloImg.current.offsetHeight; // 인사말높이
        // 스타일변수
        const helloImgStyle = helloImg.current.style; // 인사말스타일
        const profileImgStyle = profileImg.current.style; // 프로필사진스타일

        if (scrollY < headerGlobalNavHeight) {
          helloImgStyle.opacity = '1';
          helloImgStyle.top = `${helloPlaceHolderHeight}px`;
          helloImgStyle.width = '250px';

          profileImgStyle.opacity = '0';
        } else if (scrollY >= headerGlobalNavHeight && scrollY < headerGlobalNavHeight * 10) {
          helloImgStyle.opacity = '1';
          helloImgStyle.width = '800px';
          helloImg.current.style.top = `${(windowHeight - headerGlobalNavHeight - helloImgHeight) / 2 + headerGlobalNavHeight}px`;

          profileImgStyle.opacity = '0';
        } else if (scrollY >= headerGlobalNavHeight * 10 && scrollY < headerGlobalNavHeight * 13) {
          helloImgStyle.opacity = '0';

          profileImgStyle.opacity = '0';
        } else if (scrollY >= headerGlobalNavHeight * 13) {
          profileImgStyle.opacity = '1';
        } else if (scrollY >= headerGlobalNavHeight * 18) {
          profileImgStyle.opacity = '0';
        }
      }
    };
    helloImgMovingEffect(); // 초기1회실행
    window.addEventListener('scroll', helloImgMovingEffect);
    return () => {
      window.removeEventListener('scroll', helloImgMovingEffect);
    };
  }, [headerGlobalNavHeight, headerLocalNavHeight, helloPlaceHolder, helloPlaceHolderHeight]);

  return (
    <>
      <div className={hs('home')}>
        <div className={hs('home__hello')}>
          <img className={hs('home__hello--img')} ref={helloImg} src='/img/Home__hello.png' alt='say-hello' />
          <img className={hs('home__profile--img')} ref={profileImg} src='/img/Home__profile.png' alt='profile-of-me' />
        </div>
        <div className={hs('home__hello--place-holder')} ref={helloPlaceHolder} />
      </div>
      <div>플레이스홀더 이후</div>
    </>
  );
}

export default Home;
