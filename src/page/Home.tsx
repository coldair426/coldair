import React, { useEffect, useRef } from 'react';
import styles from '../style/Home.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const hs = classNames.bind(styles);

function Home({
  windowInnerWidth,
  setHomeOutlineBottom,
  setHomeProjectsBottom,
}: {
  windowInnerWidth: number;
  setHomeOutlineBottom: React.Dispatch<React.SetStateAction<undefined | number>>;
  setHomeProjectsBottom: React.Dispatch<React.SetStateAction<undefined | number>>;
}) {
  const [outlineProfileNameStyle, setOutlineProfileNameStyle] = useState<undefined | string>(undefined); // 프로필이름 스타일
  const [outlineProfileImgStyle, setOutlineProfileImgStyle] = useState<undefined | string>(undefined); // 프로필사진 스타일
  const [outlineMantraTitleStyle, setOutlineMantraTitleStyle] = useState<undefined | string>(undefined); // 만트라 타이틀 스타일
  const [outlineMantraExplanationStyle, setOutlineMantraExplanationStyle] = useState<undefined | string>(undefined); // 만트라 설명 스타일
  const [projectsPortfolioStyle, setProjectsPortfolioStyle] = useState<undefined | string>(undefined); // 포트폴리오 프로젝트 스타일
  const [projectsPortfolioTitleStyle, setProjectsPortfolioTitleStyle] = useState<undefined | string>(undefined); // 포트폴리오 프로젝트 제목 스타일
  const [projectsBreadkunStyle, setProjectsBreadkunStyle] = useState<undefined | string>(undefined); // 빵돌이 프로젝트 스타일
  const [projectsBreadkunTitleStyle, setProjectsBreadkunTitleStyle] = useState<undefined | string>(undefined); // 빵돌이 프로젝트 제목 스타일
  const [projectsSiksunbiStyle, setProjectsSiksunbiStyle] = useState<undefined | string>(undefined); // 식선비 프로젝트 스타일
  const [projectsSiksunbiTitleStyle, setProjectsSiksunbiTitleStyle] = useState<undefined | string>(undefined); // 식선비 프로젝트 제목 스타일
  const [projectsHosarounStyle, setProjectsHosarounStyle] = useState<undefined | string>(undefined); // 호사로운 프로젝트 스타일
  const [projectsHosarounTitleStyle, setProjectsHosarounTitleStyle] = useState<undefined | string>(undefined); // 호사로운 프로젝트 제목 스타일
  const [homeInformationsStyle, setHomeInformationsStyle] = useState<undefined | string>(undefined); // 정보 아티클 스타일

  const homeOutlineRef = useRef<HTMLElement | null>(null);
  const homeProjectsRef = useRef<HTMLElement | null>(null);
  const homeInformationsRef = useRef<HTMLElement | null>(null);
  const projectsPortfolioRef = useRef<HTMLElement | null>(null);
  const projectsBreadkunRef = useRef<HTMLElement | null>(null);
  const projectsSiksunbiRef = useRef<HTMLElement | null>(null);
  const projectsHosarounRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 애니메이션 함수
    const scrollHandler = () => {
      setHomeOutlineBottom(homeOutlineRef.current?.getBoundingClientRect().bottom);
      setHomeProjectsBottom(homeProjectsRef.current?.getBoundingClientRect().bottom);
      const userScrollY = window.scrollY; // 유저의 스크롤 높이
      if (projectsPortfolioRef.current && projectsBreadkunRef.current && projectsSiksunbiRef.current && projectsHosarounRef.current && homeInformationsRef.current) {
        if (userScrollY < (1600 + 108 - window.innerHeight) / 2) {
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle(undefined);
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= (1600 + 108 - window.innerHeight) / 2 && userScrollY < 1600 + 108 - window.innerHeight) {
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle('active-one');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1600 + 108 - window.innerHeight && userScrollY < 1200) {
          setOutlineProfileImgStyle('active-two');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1200 && userScrollY < 1600 + 800 - window.innerHeight + 400) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle('active');
          setOutlineMantraExplanationStyle('active');
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1600 + 800 - window.innerHeight + 400 && userScrollY < projectsPortfolioRef.current.offsetTop - 10) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle('active');
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (
          userScrollY >= projectsPortfolioRef.current.offsetTop - 10 &&
          userScrollY < projectsPortfolioRef.current.offsetTop + projectsPortfolioRef.current.offsetHeight - window.innerHeight
        ) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle('active');
          setProjectsPortfolioTitleStyle('active');
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (
          userScrollY >= projectsPortfolioRef.current.offsetTop + projectsPortfolioRef.current.offsetHeight - window.innerHeight &&
          userScrollY < projectsPortfolioRef.current.offsetTop + projectsPortfolioRef.current.offsetHeight - 73
        ) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle('active');
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (
          userScrollY >= projectsPortfolioRef.current.offsetTop + projectsPortfolioRef.current.offsetHeight - 73 &&
          userScrollY < projectsSiksunbiRef.current.offsetTop - window.innerHeight
        ) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle('active');
          setProjectsBreadkunTitleStyle('active');
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsSiksunbiRef.current.offsetTop - window.innerHeight && userScrollY < projectsSiksunbiRef.current.offsetTop - 73) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle('active');
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsSiksunbiRef.current.offsetTop - 73 && userScrollY < projectsHosarounRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle('active');
          setProjectsSiksunbiTitleStyle('active');
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsHosarounRef.current.offsetTop - window.innerHeight && userScrollY < projectsHosarounRef.current.offsetTop - 73) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle('active');
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsHosarounRef.current.offsetTop - 73 && userScrollY < homeInformationsRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle('active');
          setProjectsHosarounTitleStyle('active');
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= homeInformationsRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsPortfolioTitleStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsBreadkunTitleStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsSiksunbiTitleStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setProjectsHosarounTitleStyle(undefined);
          setHomeInformationsStyle('active');
        }
      }
    };

    scrollHandler(); // 초기1회실행
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setHomeOutlineBottom, setHomeProjectsBottom]);

  return (
    <>
      <div className={hs('home')}>
        <article className={hs('home__outline')} id='outline' ref={homeOutlineRef}>
          <div className={hs('outline__profile')}>
            <div className={hs('outline__profile--name', outlineProfileNameStyle)}>
              <img src='/img/frontend.webp' alt='front-end-dev' />
              <img src='/img/name.webp' alt='my-name-chanki' />
            </div>
            <img className={hs('outline__profile--img', outlineProfileImgStyle)} src='/img/profile.webp' alt='profile-of-me' />
          </div>
          <div className={hs('outline__mantra')}>
            {windowInnerWidth > 767 ? (
              <div className={hs('outline__mantra--title', outlineMantraTitleStyle)}>
                <div>섬세함. 빠른 습득력.</div>
                <div>몰두하는 것을 즐깁니다.</div>
              </div>
            ) : (
              <div className={hs('outline__mantra--title', outlineMantraTitleStyle)}>
                <div>섬세함.</div>
                <div>빠른 습득력.</div>
                <div>몰두하는 것을</div>
                <div>즐깁니다.</div>
              </div>
            )}
            <div className={hs('outline__mantra--explanation', outlineMantraExplanationStyle)}>
              프론트엔드 개발은 사용자와 직접 대면하는 것이라고 믿습니다. 섬세하게 구현하고 변하는 트렌드와 기술을 빠르게 습득해 최상의 결과물을 만들기 위해 노력합니다. 모든
              사용자가 직관적으로 사용하고, 편안함을 느끼면 좋겠습니다.
            </div>
          </div>
        </article>
        <article className={hs('home__projects')} id='projects' ref={homeProjectsRef}>
          <article className={hs('projects__portfolio', projectsPortfolioStyle)} ref={projectsPortfolioRef}>
            <h1 className={hs('projects__portfolio--title', projectsPortfolioTitleStyle)}>
              <a href='https://coldair.run/'>
                <img src='/icon/logo192.webp' alt='portfolio project logo' />{' '}
              </a>
              포트폴리오<span>(개인프로젝트)</span>
            </h1>
          </article>
          <article className={hs('projects__breadkun', projectsBreadkunStyle)} ref={projectsBreadkunRef}>
            <h1 className={hs('projects__breadkun--title', projectsBreadkunTitleStyle)}>
              <a href='https://breadkun.com/'>
                <img src='/icon/breadkun-logo.webp' alt='breadkun project logo' />{' '}
              </a>
              더존빵돌이<span>(팀프로젝트)</span>
            </h1>
          </article>
          <article className={hs('projects__siksunbi', projectsSiksunbiStyle)} ref={projectsSiksunbiRef}>
            <h1 className={hs('projects__siksunbi--title', projectsSiksunbiTitleStyle)}>
              <a href='http://ssb.dothome.co.kr/'>
                <img src='/icon/ssb-logo.webp' alt='ssb project logo' />{' '}
              </a>
              식선비<span>(개인프로젝트)</span>
            </h1>
          </article>
          <article className={hs('projects__hosaroun-react', projectsHosarounStyle)} ref={projectsHosarounRef}>
            <h1 className={hs('projects__hosaroun-react--title', projectsHosarounTitleStyle)}>
              <a href='http://hosaroun.dothome.co.kr/'>
                <img src='/icon/hosaroun-logo.png' alt='hosaroun project logo' />
              </a>
              호사로운<span>(팀프로젝트)</span>
            </h1>
          </article>
        </article>
        <article className={hs('home__informations', homeInformationsStyle)} id='informations' ref={homeInformationsRef}>
          <div className={hs('informations')}>
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
            <div>
              <div>skills</div>
              <div>JS React 등</div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
