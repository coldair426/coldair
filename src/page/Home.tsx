import React, { useEffect, useRef } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const hs = classNames.bind(styles);

function Home({ headerGlobalNavHeight, headerLocalNavHeight }: { headerGlobalNavHeight: number; headerLocalNavHeight: number }) {
  const hello = useRef<HTMLImageElement>(null); // "헬로컴포넌트"
  const helloImg = useRef<HTMLImageElement>(null); // "안녕하세요"
  const [helloImgStyleTag, setHelloImgStyleTag] = useState<undefined | string>(undefined); // "안녕하세요" 스타일 태그
  const intro = useRef<HTMLImageElement>(null); // "프론트엔드+홍찬기"
  const [introStyleTag, setIntroStyleTag] = useState<undefined | string>(undefined); // 인트로 스타일 태그
  const profileImg = useRef<HTMLImageElement>(null); // "프로필사진"
  const [profileImgStyleTag, setProfileImgStyleTag] = useState<undefined | string>(undefined); // 프로필사진 스타일 태그

  useEffect(() => {
    const helloMovingEffect = () => {
      if (hello.current && helloImg.current && profileImg.current && intro.current) {
        const helloHeight = headerGlobalNavHeight + headerLocalNavHeight + hello.current.offsetHeight - window.innerHeight; // hello컴포넌트가 끝나는 지점까지의 스크롤롤 높이
        if (window.scrollY < helloHeight * 0.1) {
          helloImg.current.style.top = `${(window.innerHeight - helloImg.current.offsetHeight) / 2}px`;
          intro.current.style.width = `${profileImg.current.offsetWidth}px`;
          intro.current.style.bottom = `-${intro.current.offsetHeight}px`;
          setHelloImgStyleTag('active-one');
          setProfileImgStyleTag(undefined);
          setIntroStyleTag(undefined);
        } else if (window.scrollY >= helloHeight * 0.1 && window.scrollY < helloHeight * 0.4) {
          helloImg.current.style.top = `${(window.innerHeight - helloImg.current.offsetHeight) / 2}px`;
          intro.current.style.width = `${profileImg.current.offsetWidth}px`;
          intro.current.style.bottom = `-${intro.current.offsetHeight}px`;
          setHelloImgStyleTag('active-two');
          setProfileImgStyleTag(undefined);
          setIntroStyleTag(undefined);
        } else if (window.scrollY >= helloHeight * 0.4 && window.scrollY < helloHeight) {
          helloImg.current.style.top = `${(window.innerHeight - helloImg.current.offsetHeight) / 2}px`;
          intro.current.style.width = `${profileImg.current.offsetWidth}px`;
          intro.current.style.bottom = `${profileImg.current.offsetHeight * 0.6}px`;
          setHelloImgStyleTag(undefined);
          setProfileImgStyleTag('active');
          setIntroStyleTag('active');
        } else if (window.scrollY >= helloHeight) {
          helloImg.current.style.top = `${(window.innerHeight - helloImg.current.offsetHeight) / 2}px`;
          intro.current.style.width = `${profileImg.current.offsetWidth}px`;
          intro.current.style.bottom = `-${intro.current.offsetHeight}px`;
          setHelloImgStyleTag(undefined);
          setProfileImgStyleTag(undefined);
          setIntroStyleTag(undefined);
        }
      }
    };
    helloMovingEffect(); // 초기1회실행
    window.addEventListener('scroll', helloMovingEffect);
    return () => {
      window.removeEventListener('scroll', helloMovingEffect);
    };
  }, [headerGlobalNavHeight, headerLocalNavHeight]);

  return (
    <>
      <div className={hs('home')}>
        <div className={hs('home__hello')} ref={hello}>
          <img className={hs('home__hello--img', helloImgStyleTag)} ref={helloImg} src='/img/Home__hello.png' alt='say-hello' />
          <div className={hs('home__hello--intro', introStyleTag)} ref={intro}>
            <img className={hs('home__hello--intro-frontend')} src='/img/frontend.png' alt='front-end-dev' />
            <img className={hs('home__hello--intro-name')} src='/img/name.png' alt='my-name-chanki' />
          </div>
          <img className={hs('home__profile--img', profileImgStyleTag)} ref={profileImg} src='/img/profile.png' alt='profile-of-me' />
        </div>
      </div>
    </>
  );
}

export default Home;
