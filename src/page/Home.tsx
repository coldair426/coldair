import React, { useEffect, useRef } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';

const hs = classNames.bind(styles);

function Home({ headerGlobalNavHeight, headerLocalNavHeight }: { headerGlobalNavHeight: number; headerLocalNavHeight: number }) {
  const helloImg = useRef<HTMLImageElement>(null); // "안녕하세요."
  const profileImg = useRef<HTMLImageElement>(null); // "프로필사진."
  const helloPlaceHolder = useRef<HTMLDivElement>(null); // hello place holder

  useEffect(() => {
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
  }, []);
  useEffect(() => {
    const helloImgMovingEffect = () => {
      if (helloImg.current && profileImg.current && helloPlaceHolder.current) {
        if (window.scrollY < headerGlobalNavHeight * 1) {
          helloImg.current.style.opacity = '1';
          helloImg.current.style.top =
            (
              (window.innerHeight - (headerGlobalNavHeight + headerLocalNavHeight) - helloImg.current.offsetHeight) / 2 +
              (headerGlobalNavHeight + headerLocalNavHeight)
            ).toString() + 'px';
          helloImg.current.style.width = '250px';

          profileImg.current.style.opacity = '0';

          helloPlaceHolder.current.style.height = window.innerHeight + headerGlobalNavHeight * 13 + 'px';
        } else if (window.scrollY >= headerGlobalNavHeight * 1 && window.scrollY < headerGlobalNavHeight * 10) {
          helloImg.current.style.opacity = '1';
          helloImg.current.style.width = '800px';
          helloImg.current.style.top = ((window.innerHeight - headerGlobalNavHeight - helloImg.current.offsetHeight) / 2 + headerGlobalNavHeight).toString() + 'px';

          profileImg.current.style.opacity = '0';
        } else if (window.scrollY >= headerGlobalNavHeight * 10 && window.scrollY < headerGlobalNavHeight * 13) {
          helloImg.current.style.opacity = '0';

          profileImg.current.style.opacity = '0';
        } else if (window.scrollY >= headerGlobalNavHeight * 13) {
          profileImg.current.style.opacity = '1';
        }
      }
    };
    helloImgMovingEffect(); // 초기1회실행
    window.addEventListener('scroll', helloImgMovingEffect);
    return () => {
      window.removeEventListener('scroll', helloImgMovingEffect);
    };
  }, [headerGlobalNavHeight, headerLocalNavHeight]);

  return (
    <>
      <div className={hs('home')}>
        <div className={hs('home__hello')}>
          <img className={hs('home__hello--img')} ref={helloImg} src='/img/Home__hello.png' alt='say-hello' />
          <img className={hs('home__profile--img')} ref={profileImg} src='/img/Home__profile.png' alt='profile-of-me' />
        </div>
        <div className={hs('home__hello-place-holder')} ref={helloPlaceHolder}></div>
      </div>
      <div>플레이스홀더 이후</div>
    </>
  );
}

export default Home;
