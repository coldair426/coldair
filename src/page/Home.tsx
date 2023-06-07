import React, { useEffect, useRef } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const hs = classNames.bind(styles);

function Home({ headerGlobalNavHeight, headerLocalNavHeight }: { headerGlobalNavHeight: number; headerLocalNavHeight: number }) {
  const outlineProfile = useRef<HTMLImageElement>(null); // 프로필랩
  const outlineProfileName = useRef<HTMLImageElement>(null); // 프로필이름
  const [outlineProfileNameStyle, setOutlineProfileNameStyle] = useState<undefined | string>(undefined); // 프로필이름 스타일
  const outlineProfileImg = useRef<HTMLImageElement>(null); // 프로필사진
  const [outlineProfileImgStyle, setOutlineProfileImgStyle] = useState<undefined | string>(undefined); // 프로필사진 스타일
  const [outlineMantraTitleStyle, setOutlineMantraTitleStyle] = useState<undefined | string>(undefined);
  const [outlineMantraExplanationStyle, setOutlineMantraExplanationStyle] = useState<undefined | string>(undefined);

  useEffect(() => {
    const helloMovingEffect = () => {
      if (outlineProfile.current && outlineProfileImg.current && outlineProfileName.current) {
        const homeOutlineHeight = headerGlobalNavHeight + headerLocalNavHeight + outlineProfile.current.offsetHeight - window.innerHeight; // outline__profile 높이
        if (window.scrollY < homeOutlineHeight * 0.1) {
          outlineProfileName.current.style.width = `${outlineProfileImg.current.offsetWidth}px`;
          outlineProfileName.current.style.bottom = `-${outlineProfileName.current.offsetHeight}px`;
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle(undefined);
        } else if (window.scrollY >= homeOutlineHeight * 0.1 && window.scrollY < homeOutlineHeight) {
          outlineProfileName.current.style.width = `${outlineProfileImg.current.offsetWidth}px`;
          outlineProfileName.current.style.bottom = `${outlineProfileImg.current.offsetHeight * 0.7}px`;
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle('active-one');
        } else if (window.scrollY >= homeOutlineHeight && window.scrollY < homeOutlineHeight + headerLocalNavHeight + outlineProfileName.current.offsetHeight) {
          setOutlineProfileImgStyle('active-two');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
        } else if (
          window.scrollY >= homeOutlineHeight + headerLocalNavHeight + outlineProfileName.current.offsetHeight &&
          window.scrollY < homeOutlineHeight + headerLocalNavHeight + outlineProfileImg.current.offsetHeight + 300
        ) {
          setOutlineProfileImgStyle('active-three');
          setOutlineMantraTitleStyle('active');
          setOutlineMantraExplanationStyle('active');
        } else if (window.scrollY >= homeOutlineHeight + headerLocalNavHeight + outlineProfileImg.current.offsetHeight + 300) {
          setOutlineProfileImgStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
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
        <article className={hs('home__outline')}>
          <div className={hs('outline__profile')} ref={outlineProfile}>
            <div className={hs('outline__profile--name', outlineProfileNameStyle)} ref={outlineProfileName}>
              <img src='/img/frontend.png' alt='front-end-dev' />
              <img src='/img/name.png' alt='my-name-chanki' />
            </div>
            <img className={hs('outline__profile--img', outlineProfileImgStyle)} ref={outlineProfileImg} src='/img/profile.png' alt='profile-of-me' />
          </div>
          <div className={hs('outline__mantra')}>
            <div className={hs('outline__mantra--title', outlineMantraTitleStyle)}>
              <div>섬세함. 빠른 습득력.</div>
              <div>몰두하는 것을 즐깁니다.</div>
            </div>
            <div className={hs('outline__mantra--explanation', outlineMantraExplanationStyle)}>
              프론트엔드 개발은 사용자와 직접 대면하는 것이라고 믿습니다. 섬세하게 구현하고 변하는 트렌드와 기술을 빠르게 습득해 최상의 결과물을 만들기 위해 노력합니다. 모든
              사용자가 직관적으로 사용하고, 편안함을 느끼면 좋겠습니다.
            </div>
          </div>
        </article>
        <article className={hs('home__projects')}>
          <article>포트폴리오페이지(개인)</article>
          <article>빵돌이(팀)</article>
          <article>식선비(개인)</article>
          <article>호사로운(팀)</article>
          <article>VanilaJs호사로운(팀)</article>
        </article>
        <article className={hs('home__informations')}>
          <div>
            <div>이름</div>
            <div>홍찬기</div>
          </div>
          <div>
            <div>생년월일</div>
            <div>96.04.26</div>
          </div>
          <div>
            <div>카카오톡</div>
            <div>오픈챗팅링크</div>
          </div>
          <div>벨로그</div>
          <div>깃헙</div>
          <div>
            <div>메일</div>
            <div>coldair426@gmail.com</div>
          </div>
          <div>
            <div>학력</div>
            <div>강원대학교(춘천)</div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
