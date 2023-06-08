import React, { useEffect, useRef } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const hs = classNames.bind(styles);

function Home({ headerGlobalNavHeight, headerLocalNavHeight }: { headerGlobalNavHeight: number; headerLocalNavHeight: number }) {
  const outlineProfileRef = useRef<HTMLImageElement>(null); // 프로필랩
  const outlineProfileNameRef = useRef<HTMLImageElement>(null); // 프로필이름
  const [outlineProfileNameStyle, setOutlineProfileNameStyle] = useState<undefined | string>(undefined); // 프로필이름 스타일
  const outlineProfileImgRef = useRef<HTMLImageElement>(null); // 프로필사진
  const [outlineProfileImgStyle, setOutlineProfileImgStyle] = useState<undefined | string>(undefined); // 프로필사진 스타일
  const [outlineMantraTitleStyle, setOutlineMantraTitleStyle] = useState<undefined | string>(undefined); // 만트라 타이틀 스타일
  const [outlineMantraExplanationStyle, setOutlineMantraExplanationStyle] = useState<undefined | string>(undefined); // 만트라 설명 스타일
  const outlineMantraRef = useRef<HTMLImageElement>(null); // 만트라

  useEffect(() => {
    const desktopScrollHandler = () => {
      const userScrollY = window.scrollY; // 유저의 스크롤 높이
      const outlineProfile = outlineProfileRef.current;
      const outlineProfileName = outlineProfileNameRef.current;
      const outlineProfileImg = outlineProfileImgRef.current;
      const outlineMantra = outlineMantraRef.current;
      if (outlineProfile && outlineProfileName && outlineProfileImg && outlineMantra) {
        const outlineProfileTopHeight = headerGlobalNavHeight + headerLocalNavHeight + outlineProfile.offsetHeight - window.innerHeight; // outline__profile 하단이 window 하단에 걸리는 시점
        const outlineProfileHeight = headerGlobalNavHeight + headerLocalNavHeight + outlineProfile.offsetHeight; // outline__profile 실제 높이, window상단(끝) 위치하는 시점
        if (userScrollY < outlineProfileTopHeight * 0.1) {
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle(undefined);
        } else if (userScrollY >= outlineProfileTopHeight * 0.1 && userScrollY < outlineProfileTopHeight) {
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle('active-one');
        } else if (userScrollY >= outlineProfileTopHeight && userScrollY < outlineProfileTopHeight + outlineProfileImg.height) {
          setOutlineProfileImgStyle('active-two');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
        } else if (userScrollY >= outlineProfileTopHeight + outlineProfileImg.height && userScrollY < outlineProfileHeight * 0.75) {
          setOutlineProfileImgStyle('active-three');
          setOutlineMantraTitleStyle('active');
          setOutlineMantraExplanationStyle('active');
        } else if (userScrollY >= outlineProfileHeight * 0.75 && userScrollY < outlineProfileHeight + outlineMantra.height) {
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
        } else if (userScrollY >= outlineProfileHeight + outlineMantra.height) {
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
        }
      }
    };
    desktopScrollHandler(); // 초기1회실행
    window.addEventListener('scroll', desktopScrollHandler);
    return () => {
      window.removeEventListener('scroll', desktopScrollHandler);
    };
  }, [headerGlobalNavHeight, headerLocalNavHeight]);

  return (
    <>
      <div className={hs('home')}>
        <article className={hs('home__outline')}>
          <div className={hs('outline__profile')} ref={outlineProfileRef}>
            <div className={hs('outline__profile--name', outlineProfileNameStyle)} ref={outlineProfileNameRef}>
              <img src='/img/frontend.webp' alt='front-end-dev' />
              <img src='/img/name.webp' alt='my-name-chanki' />
            </div>
            <img className={hs('outline__profile--img', outlineProfileImgStyle)} ref={outlineProfileImgRef} src='/img/profile.webp' alt='profile-of-me' />
          </div>
          <div className={hs('outline__mantra')} ref={outlineMantraRef}>
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
          <article className={hs('projects__portfolio')}>
            <div className={hs('projects__portfolio--title')}>포트폴리오(개인프로젝트)</div>
            <div>플레이스홀더</div>
          </article>
          <article className={hs('projects__breadkun')}>빵돌이(팀)</article>
          <article className={hs('projects__siksunbi')}>식선비(개인)</article>
          <article className={hs('projects__hosaroun-react')}>호사로운(팀)</article>
          <article className={hs('projects__hosaroun-vanilla-js')}>VanilaJs호사로운(팀)</article>
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
