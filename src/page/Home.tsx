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
  const [projectsBreadkunStyle, setProjectsBreadkunStyle] = useState<undefined | string>(undefined); // 빵돌이 프로젝트 스타일
  const [projectsSiksunbiStyle, setProjectsSiksunbiStyle] = useState<undefined | string>(undefined); // 식선비 프로젝트 스타일
  const [projectsHosarounStyle, setProjectsHosarounStyle] = useState<undefined | string>(undefined); // 호사로운 프로젝트 스타일
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
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= (1600 + 108 - window.innerHeight) / 2 && userScrollY < 1600 + 108 - window.innerHeight) {
          setOutlineProfileImgStyle('active-one');
          setOutlineProfileNameStyle('active-one');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1600 + 108 - window.innerHeight && userScrollY < 1200) {
          setOutlineProfileImgStyle('active-two');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1200 && userScrollY < 1600 + 1300 - window.innerHeight + 400) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle('active');
          setOutlineMantraExplanationStyle('active');
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1600 + 1300 - window.innerHeight + 400 && userScrollY < projectsPortfolioRef.current.offsetTop - 10) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle('active');
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
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
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
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
          setProjectsBreadkunStyle('active');
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
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
          setProjectsBreadkunStyle('active');
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsSiksunbiRef.current.offsetTop - window.innerHeight && userScrollY < projectsSiksunbiRef.current.offsetTop - 73) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle('active');
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsSiksunbiRef.current.offsetTop - 73 && userScrollY < projectsHosarounRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle('active');
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsHosarounRef.current.offsetTop - window.innerHeight && userScrollY < projectsHosarounRef.current.offsetTop - 73) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle('active');
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= projectsHosarounRef.current.offsetTop - 73 && userScrollY < homeInformationsRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle('active');
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= homeInformationsRef.current.offsetTop - window.innerHeight) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-three');
          setOutlineMantraTitleStyle(undefined);
          setOutlineMantraExplanationStyle(undefined);
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
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
              프론트엔드 개발은 사용자와 직접 대면하는 것이라고 믿습니다. 섬세하게 구현하고 변하는 트렌드와 기술을 빠르게 습득해 최상의 결과물을 만들고자 노력합니다. 사용자가
              직관적으로 사용하고, 편안함을 느끼면 좋겠습니다.
            </div>
          </div>
        </article>
        <article className={hs('home__projects')} id='projects' ref={homeProjectsRef}>
          <article className={hs('projects__portfolio', projectsPortfolioStyle)} ref={projectsPortfolioRef}>
            <h1>
              <img src='/icon/logo192.webp' alt='portfolio project logo' />
              포트폴리오<span>(개인프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.05.28 ~ 23.06.29)</div>
              <div className={hs('overview__stacks')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/Firebase-FFCA28?logo=Firebase&logoColor=white' alt='firebase mark' />
                <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                <img src='https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white' alt='Ts mark' />
                <img src='https://img.shields.io/badge/SASS-CC6699?logo=SASS&logoColor=white' alt='sass mark' />
                <img src='https://img.shields.io/badge/CSSModules-000000?logo=cssmodules&logoColor=white' alt='css module mark' />
              </div>
              <div className={hs('overview__objective')}>
                <img src='/img/portfolio-objective.webp' alt='portfolio objective img' />
              </div>
              <div className={hs('overview__links')}>
                <a href='https://coldair.run/'>
                  <div style={{ backgroundColor: '#87CBB9', color: '#31334B' }}>서비스 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/coldair'>
                  <div style={{ backgroundColor: '#87CBB9', color: '#31334B' }}>GitHub 바로가기</div>
                </a>
                <a href='https://velog.io/@coldair426/series/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4'>
                  <div style={{ backgroundColor: '#87CBB9', color: '#31334B' }}>Blog 바로가기</div>
                </a>
              </div>
            </div>
            <div className={hs('roadmaps')}>
              <div>
                <img src='/icon/portfolio-check-mark.webp' alt='check mark' />
                반응형 웹(Responsive Web)
              </div>
              <div>
                <img src='/icon/portfolio-check-mark.webp' alt='check mark' />
                빌드 및 배포 자동화; CI/CD(GitHub Actions, Firebase)
              </div>
              <div>
                <img src='/icon/portfolio-check-mark.webp' alt='check mark' />
                PWA(Progressive Web App) 설정
              </div>
              <div>
                <img src='/icon/portfolio-check-mark.webp' alt='check mark' />
                Cross-browsing을 위한 CSS reset(styled-reset)
              </div>
            </div>
            <div className={hs('portfolio__imgs')}>
              <img src='/img/coldair-desk-1.webp' alt='coldair desktop main page' />
              <img src='/img/coldair-mobile-1.webp' alt='coldair mobile main page' />
              <img src='/img/coldair-mobile-2.webp' alt='coldair mobile main page' />
            </div>
            <div className={hs('main-functions')} style={{ backgroundColor: '#87CBB9' }}>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  프로젝트
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334B' }}>
                  프로젝트 섹션에서는 목표, 개요, 사용된 기술 및 도구, 결과물에 대한 설명과 스크린샷을 제공합니다. 실제 서비스 링크, 개발 과정의 세부 내용을 볼 수 있는 기술 블로그,
                  GitHub 등의 근거를 제공합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  연락정보
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334B' }}>
                  개발을 처음 시작했을 때부터 지금까지의 학습 과정과 문제 해결 과정을 상세하게 정리한 기술 블로그와 GitHub 링크를 제공합니다. 또한, 카카오톡과 메일 링크를 제공해
                  소통을 용이하게 합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  반응형 웹
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334B' }}>
                  다양한 디바이스와 화면 크기에서 최적의 사용자 경험을 제공합니다. 데스크톱, 태블릿, 스마트폰 등 다양한 환경에서 편리하게 이용할 수 있습니다.
                </div>
              </div>
            </div>
          </article>
          <article className={hs('projects__breadkun', projectsBreadkunStyle)} ref={projectsBreadkunRef}>
            <h1>
              <img src='/icon/breadkun-logo.webp' alt='breadkun project logo' />
              더존빵돌이<span>(팀프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.04.04 ~ 23.05.23)</div>
              <div className={hs('overview__stacks')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/Firebase-FFCA28?logo=Firebase&logoColor=white' alt='firebase mark' />
                <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                <img src='https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white' alt='Ts mark' />
                <img src='https://img.shields.io/badge/SASS-CC6699?logo=SASS&logoColor=white' alt='sass mark' />
                <img src='https://img.shields.io/badge/CSSModules-000000?logo=cssmodules&logoColor=white' alt='css module mark' />
              </div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  이 프로젝트는 프론트엔드(1명)와 백엔드(1명)로 총 2명으로 구성된 팀으로 진행되었으며, 저는 프론트엔드 포지션으로 참여하였습니다.{' '}
                  <u style={{ textUnderlineOffset: '3px' }}>실제 운영 중인 서비스입니다.</u>
                </div>
              </div>
              <div className={hs('overview__objective')}>
                <img src='/img/breadkun-objective.webp' alt='breadkun objective img' />
              </div>
              <div className={hs('overview__links')}>
                <a href='https://breadkun.com/'>
                  <div style={{ backgroundColor: '#7D2020', color: '#ECECEB' }}>서비스 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/breadkun'>
                  <div style={{ backgroundColor: '#7D2020', color: '#ECECEB' }}>GitHub 바로가기</div>
                </a>
                <a href='https://velog.io/@coldair426/series/breadkun'>
                  <div style={{ backgroundColor: '#7D2020', color: '#ECECEB' }}>Blog 바로가기</div>
                </a>
              </div>
            </div>
            <div className={hs('roadmaps')}>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                최근 옵션(회사, 버스종착지) 저장(local storage)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                식단(Meal)의 일주일 날짜 표시 및 현재 날짜 및 식단 자동 선택 로직
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                빌드 및 배포 자동화; CI/CD(GitHub Actions, Firebase)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                SEO(Search Engine Optimization)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                PWA(Progressive Web App) 설정
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                대시보드(Home)의 날씨와 미세먼지 Api 연결(Open Api)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                버스(Bus)에서 사용자 현재위치 정보 가져오기(Web Api)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                버스(Bus)의 현재위치와 각종 정류장 위치정보 맵에 표시(Kakao Api)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                버스(Bus)의 현재위치로 부터 남은시간 받는 Api 연결(Back-end)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                카카오톡 플러스친구에서 링크 제공을 위한 URL 파라미터(react-router-dom)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                Api Key env 저장
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                404Ppage
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                Cross-browsing을 위한 CSS reset(styled-reset)
              </div>
              <div>
                <img src='/icon/breadkun-check-mark.webp' alt='check mark' />
                Router(react-router-dom)
              </div>
            </div>
            <div className={hs('breadkun__imgs')}>
              <div className={hs('breadkun__imgs--wrapper')}>
                <img src='/img/breadkun-1.webp' alt='breadkunn main page' />
                <img src='/img/breadkun-2.webp' alt='breadkunn meal page' />
                <img src='/img/breadkun-3.webp' alt='breadkunn bus page' />
                <img src='/img/breadkun-5.webp' alt='breadkunn bus page' />
              </div>
            </div>
            <div className={hs('main-functions')} style={{ backgroundColor: '#7D2020' }}>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  SEO
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  검색 엔진 최적화(SEO)를 통해 네이버와 구글에서 더존 빵돌이를 상단 노출시켜 사용자들의 높은 접근성을 제공합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  모바일 최적화
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  모바일 환경에 최적화된 디자인을 가지고 있어 다양한 모바일 디바이스에서 직관적이고 일관된 사용자 경험을 얻을 수 있습니다. 모바일 앱과 유사한 편리함을 느낄 수
                  있습니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  PWA
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  Progressive Web App로 제공되어, 손쉽게 앱 형태로 이용할 수 있습니다. 지속적인 업데이트로 완성도와 사용성을 개선할 예정입니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  통근 버스
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  더존비즈온 통근 버스 정보를 제공합니다. 특정 버스 노선의 정류장 위치, 실시간 도착 예정 시간을 확인할 수 있어 교통 계획을 효율적으로 조정할 수 있습니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  식단
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  더존비즈온 구내식당과 사내베이커리의 다양한 식단을 빠르고 간편하게 확인할 수 있어 건강한 식사 계획을 세우기에 효과적입니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#ECECEB' }}>
                  대시보드
                </div>
                <div className={hs('function__explanation')} style={{ color: '#a1a1a6' }}>
                  대시보드에는 더존비즈온 회사 위치 기반의 날씨와 미세먼지 농도 정보가 표시됩니다. 또한, 자주 이용하는 기능에 빠르게 액세스할 수 있는 단축 아이콘을 제공하여
                  편의성을 최대화합니다.
                </div>
              </div>
            </div>
          </article>
          <article className={hs('projects__siksunbi', projectsSiksunbiStyle)} ref={projectsSiksunbiRef}>
            <h1>
              <img src='/icon/ssb-logo.webp' alt='ssb project logo' />
              식선비<span>(개인프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.02.26 ~ 23.03.07)</div>
              <div className={hs('overview__stacks')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=white' alt='CSS mark' />
              </div>
              <div className={hs('overview__objective')}>
                <img src='/img/ssb-objective.webp' alt='ssb objective img' />
              </div>
              <div className={hs('overview__links')}>
                <a href='http://ssb.dothome.co.kr/'>
                  <div style={{ backgroundColor: '#F0A500', color: '#ECECEB' }}>서비스 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/siksunbi'>
                  <div style={{ backgroundColor: '#F0A500', color: '#ECECEB' }}>GitHub 바로가기</div>
                </a>
                <a href='https://velog.io/@coldair426/series/%EC%8B%9D%EC%84%A0%EB%B9%84'>
                  <div style={{ backgroundColor: '#F0A500', color: '#ECECEB' }}>Blog 바로가기</div>
                </a>
              </div>
            </div>
            <div className={hs('roadmaps')}>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                URL 파라미터를 이용한 식당 구분(react-router-dom)
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                QR코드 생성 Api 연결
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                {`<SlideBox>`}의 블러 및 고정효과
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                메뉴판 내부의 세부메뉴 가로 스크롤
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                웹폰트 적용
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                대시보드의 최근 추가된 메뉴판
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                404페이지
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                Cross-browsing을 위한 CSS reset(styled-reset)
              </div>
              <div>
                <img src='/icon/ssb-check-mark.webp' alt='check mark' />
                Router(react-router-dom)
              </div>
            </div>
            <div className={hs('ssb__imgs')}>
              <div className={hs('ssb__imgs--wrapper')}>
                <img src='/img/ssb-1.webp' alt='siksunbi page' />
                <img src='/img/ssb-2.webp' alt='siksunbi page' />
                <img src='/img/ssb-3.webp' alt='siksunbi page' />
                <img src='/img/ssb-4.webp' alt='siksunbi page' />
              </div>
            </div>
            <div className={hs('main-functions')} style={{ backgroundColor: '#F0A500' }}>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#f5f5f7' }}>
                  메뉴판
                </div>
                <div className={hs('function__explanation')} style={{ color: '#ECECEB' }}>
                  간편하게 음식점의 모바일 메뉴판을 생성할 수 있고, 누구나 편하게 접속 할 수 있습니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#f5f5f7' }}>
                  QR코드
                </div>
                <div className={hs('function__explanation')} style={{ color: '#ECECEB' }}>
                  음식점의 모바일 메뉴판 URL을 QR코드로 제공하고, 이를 통해 손님이 테이블에서 간편하게 접속할 수 있습니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#f5f5f7' }}>
                  모바일 최적화
                </div>
                <div className={hs('function__explanation')} style={{ color: '#ECECEB' }}>
                  모바일 환경에 최적화된 디자인을 가지고 있습니다. 다양한 모바일 디바이스에서 직관적이고 일관된 사용자 경험을 얻을 수 있습니다.
                </div>
              </div>
            </div>
          </article>
          <article className={hs('projects__hosaroun', projectsHosarounStyle)} ref={projectsHosarounRef}>
            <h1>
              <img src='/icon/hosaroun-logo.webp' alt='hosaroun project logo' />
              호사로운<span>(팀프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.01.05 ~ 23.01.29)</div>
              <div className={hs('overview__stacks')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=white' alt='HTML mark' />
                <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=1572B6&logoColor=white' alt='CSS mark' />
                <img src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white' alt='JS mark' />
              </div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  이 프로젝트는 프론트엔드 2명으로 구성된 팀으로 진행되었으며, 저는 Index, Overview, Rooms, Booknow, Contactus 페이지를 담당하였습니다.
                </div>
              </div>
              <div className={hs('overview__period')}>(23.02.21 ~ 23.02.24)</div>
              <div className={hs('overview__stacks')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                <img src='https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white' alt='Bootstrap mark' />
                <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=white' alt='CSS mark' />
              </div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  서비스를 Vanilla JS에서 React로 리팩토링 하였습니다. <u style={{ textUnderlineOffset: '3px' }}>실제 운영 중인 서비스입니다.</u>
                </div>
              </div>
              <div className={hs('overview__objective')}>
                <img src='/img/hosaroun-objective.webp' alt='hosaroun objective img' />
              </div>
              <div className={hs('overview__links')}>
                <a href='http://hosaroun.dothome.co.kr/'>
                  <div style={{ backgroundColor: '#ECECEB', color: '#000000' }}>서비스 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/hosaroun'>
                  <div style={{ backgroundColor: '#ECECEB', color: '#000000' }}>GitHub 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/hosaroun-React'>
                  <div style={{ backgroundColor: '#ECECEB', color: '#000000' }}>GitHub(React) 바로가기</div>
                </a>
                <a href='https://velog.io/@coldair426/series/%ED%98%B8%EC%82%AC%EB%A1%9C%EC%9A%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'>
                  <div style={{ backgroundColor: '#ECECEB', color: '#000000' }}>Blog 바로가기</div>
                </a>
              </div>
            </div>
            <div className={hs('roadmaps')}>
              <div>
                <span>Vanilla JS</span>
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Responsive Web(CSS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Mobile sticky header(CSS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                PC sticky header(JS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Mobile navigation menu(JS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                현재 페이지 표시(JS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Carousel slider(JS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Image preloading(JS)
              </div>
              <div>
                <span>React</span>
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                SEO(Search Engine Optimization)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Copy alert(React Bootstrap)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Carousel slider(React Bootstrap)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Location map(Kakao map api)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                현재 페이지 표시(React Router-dom)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Responsive Web(CSS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Mobile sticky header(CSS)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Mobile navigation box(React)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                PC navigation bar(React)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                CSS reset(styled-reset)
              </div>
              <div>
                <img src='/icon/hosaroun-check-mark.webp' alt='check mark' />
                Router(React Router-dom)
              </div>
            </div>
            <div className={hs('hosaroun__imgs')}>
              <div className={hs('hosaroun__imgs--desktop')}>
                <div className={hs('hosaroun__imgs--desktop-wrapper')}>
                  <img src='/img/hosaroun-desk-1.webp' alt='hosaroun page' />
                  <img src='/img/hosaroun-desk-3.webp' alt='hosaroun page' />
                </div>
              </div>
              <div className={hs('hosaroun__imgs--mobile')}>
                <div className={hs('hosaroun__imgs--mobile-wrapper')}>
                  <img src='/img/hosaroun-mobile-1.webp' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-2.webp' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-3.webp' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-4.webp' alt='hosaroun page' />
                </div>
              </div>
            </div>
            <div className={hs('main-functions')} style={{ backgroundColor: '#ECECEB' }}>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  프리로드
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}>
                  리팩토링 전(Vanilla JS) 이미지 캐로셀의 1~2s의 딜레이를 동기적 프리로드(페이지 로드 직후)를 통해 개선했습니다. (약 6ms)
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  SEO
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}>
                  검색 엔진 최적화(SEO)를 통해 네이버와 구글에서 호사로운을 상단 노출시켜 사용자들의 높은 접근성을 제공합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  코드 컨벤션
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}>
                  협업 과정에서 BEM(Block, Element, Modifier) 방법론을 채택 하였습니다. 모든 코드에 적용해 협업 효율, 가독성, 유지보수 효율을 높혔습니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  카카오맵 API
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}>
                  카카오맵 API를 이용해 정확한 위치를 표현하고, 지도보기와 길찾기 링크를 제공합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}>
                  사진
                </div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}>
                  캐로셀 슬라이더를 이용해 다양한 사진을 효과적으로 제공합니다.
                </div>
              </div>
              <div className={hs('function')}>
                <div className={hs('function__title')} style={{ color: '#000000' }}></div>
                <div className={hs('function__explanation')} style={{ color: '#31334b' }}></div>
              </div>
            </div>
          </article>
        </article>
        <article className={hs('home__informations', homeInformationsStyle)} id='informations' ref={homeInformationsRef}>
          <div className={hs('informations')}>
            <div className={hs('informations__about-me')}>
              <div className={hs('informations__about-me--texts')}>
                <div className={hs('informations__about-me--text')}>
                  <div>Number</div>
                  <div>010-8108-5451</div>
                </div>
                <div className={hs('informations__about-me--text')}>
                  <div>Email</div>
                  <div>coldair426@gmail.com</div>
                </div>
                <div className={hs('informations__about-me--text')}>
                  <div>Velog</div>
                  <div>https://velog.io/@coldair426</div>
                </div>
                <div className={hs('informations__about-me--text')}>
                  <div>GitHub</div>
                  <div>https://github.com/coldair426</div>
                </div>
              </div>
              <img className={hs('informations__about-me--img')} src='/img/informations-img.webp' alt='information-img' />
            </div>
            <div className={hs('informations__stacks')}>
              <div className={hs('informations__stacks--name')}>Environment</div>
              <div className={hs('informations__stack')}>
                <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                <img src='https://img.shields.io/badge/Firebase-FFCA28?logo=Firebase&logoColor=white' alt='firebase mark' />
              </div>
              <div className={hs('informations__stacks--name')}>Developement</div>
              <div className={hs('informations__stack')}>
                <img src='https://img.shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=white' alt='HTML mark' />
                <img src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white' alt='JS mark' />
                <img src='https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white' alt='Ts mark' />
                <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                <img src='https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white' alt='Bootstrap mark' />
                <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=1572B6&logoColor=white' alt='CSS mark' />
                <img src='https://img.shields.io/badge/SASS-CC6699?logo=SASS&logoColor=white' alt='sass mark' />
                <img src='https://img.shields.io/badge/CSSModules-000000?logo=cssmodules&logoColor=white' alt='css module mark' />
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
