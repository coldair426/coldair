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
        } else if (userScrollY >= 1200 && userScrollY < 1600 + 800 - window.innerHeight + 400) {
          setOutlineProfileImgStyle('active-three');
          setOutlineProfileNameStyle('active-two');
          setOutlineMantraTitleStyle('active');
          setOutlineMantraExplanationStyle('active');
          setProjectsPortfolioStyle(undefined);
          setProjectsBreadkunStyle(undefined);
          setProjectsSiksunbiStyle(undefined);
          setProjectsHosarounStyle(undefined);
          setHomeInformationsStyle(undefined);
        } else if (userScrollY >= 1600 + 800 - window.innerHeight + 400 && userScrollY < projectsPortfolioRef.current.offsetTop - 10) {
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
              프론트엔드 개발은 사용자와 직접 대면하는 것이라고 믿습니다. 섬세하게 구현하고 변하는 트렌드와 기술을 빠르게 습득해 최상의 결과물을 만들기 위해 노력합니다. 모든
              사용자가 직관적으로 사용하고, 편안함을 느끼면 좋겠습니다.
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
              <div className={hs('overview__period')}>(23.05.28 ~ )</div>
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
              <div className={hs('overview__stacks')}>
                <div className={hs('overview__environment')}>
                  <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                  <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                  <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                  <img src='https://img.shields.io/badge/Firebase-FFCA28?logo=Firebase&logoColor=white' alt='firebase mark' />
                </div>
                <div className={hs('overview__development')}>
                  <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                  <img src='https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white' alt='Ts mark' />
                  <img src='https://img.shields.io/badge/SASS-CC6699?logo=SASS&logoColor=white' alt='sass mark' />
                  <img src='https://img.shields.io/badge/CSSModules-000000?logo=cssmodules&logoColor=white' alt='css module mark' />
                </div>
              </div>
            </div>
            <div className={hs('portfolio__imgs')}>
              <img src='/img/coldair-desk-1.webp' alt='coldair desktop main page' />
              <img src='/img/coldair-mobile-1.webp' alt='coldair mobile main page' />
              <img src='/img/coldair-mobile-2.webp' alt='coldair mobile main page' />
            </div>
            <div className={hs('roadmaps')}></div>
          </article>
          <article className={hs('projects__breadkun', projectsBreadkunStyle)} ref={projectsBreadkunRef}>
            <h1>
              <img src='/icon/breadkun-logo.webp' alt='breadkun project logo' />
              더존빵돌이<span>(팀프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.04.04 ~ 23.05.23)</div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  이 프로젝트는 프론트엔드(1명)와 백엔드(1명)로 총 2명으로 구성된 팀으로 진행되었으며, 저는 프론트엔드 포지션으로 참여하였습니다.{' '}
                  <u>실제 운영 중인 서비스입니다.</u>
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
              <div className={hs('overview__stacks')}>
                <div className={hs('overview__environment')}>
                  <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                  <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                  <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                  <img src='https://img.shields.io/badge/Firebase-FFCA28?logo=Firebase&logoColor=white' alt='firebase mark' />
                </div>
                <div className={hs('overview__development')}>
                  <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                  <img src='https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white' alt='Ts mark' />
                  <img src='https://img.shields.io/badge/SASS-CC6699?logo=SASS&logoColor=white' alt='sass mark' />
                  <img src='https://img.shields.io/badge/CSSModules-000000?logo=cssmodules&logoColor=white' alt='css module mark' />
                </div>
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
            <div className={hs('roadmaps')}></div>
          </article>
          <article className={hs('projects__siksunbi', projectsSiksunbiStyle)} ref={projectsSiksunbiRef}>
            <h1>
              <img src='/icon/ssb-logo.webp' alt='ssb project logo' />
              식선비<span>(개인프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.02.26 ~ 23.03.07)</div>
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
              <div className={hs('overview__stacks')}>
                <div className={hs('overview__environment')}>
                  <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                  <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                  <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                </div>
                <div className={hs('overview__development')}>
                  <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                  <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=white' alt='CSS mark' />
                </div>
              </div>
            </div>
            <div className={hs('ssb__imgs')}>
              <div className={hs('ssb__imgs--wrapper')}>
                <img src='/img/ssb-1.png' alt='siksunbi page' />
                <img src='/img/ssb-2.png' alt='siksunbi page' />
                <img src='/img/ssb-3.png' alt='siksunbi page' />
                <img src='/img/ssb-4.png' alt='siksunbi page' />
              </div>
            </div>
            <div className={hs('roadmaps')}></div>
          </article>
          <article className={hs('projects__hosaroun', projectsHosarounStyle)} ref={projectsHosarounRef}>
            <h1>
              <img src='/icon/hosaroun-logo.png' alt='hosaroun project logo' />
              호사로운<span>(팀프로젝트)</span>
            </h1>
            <div className={hs('overview')}>
              <div className={hs('overview__period')}>(23.01.05 ~ 23.01.29)</div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  이 프로젝트는 프론트엔드 2명으로 구성된 팀으로 진행되었으며, 저는 Index, Overview, Rooms, Booknow, Contactus 페이지를 담당하였습니다.
                </div>
              </div>
              <div className={hs('overview__period')}>(23.02.21 ~ 23.02.24)</div>
              <div className={hs('overview__team')}>
                <div className={hs('overview__member')}>
                  서비스를 Vanilla JS에서 React로 리팩토링 하였습니다. <u>실제 운영 중인 서비스입니다.</u>
                </div>
              </div>
              <div className={hs('overview__objective')}>
                <img src='/img/hosaroun-objective.webp' alt='hosaroun objective img' />
              </div>
              <div className={hs('overview__links')}>
                <a href='http://hosaroun.dothome.co.kr/'>
                  <div style={{ backgroundColor: '#a1a1a6', color: '#000000' }}>서비스 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/hosaroun'>
                  <div style={{ backgroundColor: '#a1a1a6', color: '#000000' }}>GitHub 바로가기</div>
                </a>
                <a href='https://github.com/coldair426/hosaroun-React'>
                  <div style={{ backgroundColor: '#a1a1a6', color: '#000000' }}>GitHub(React) 바로가기</div>
                </a>
                <a href='https://velog.io/@coldair426/series/%ED%98%B8%EC%82%AC%EB%A1%9C%EC%9A%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8'>
                  <div style={{ backgroundColor: '#a1a1a6', color: '#000000' }}>Blog 바로가기</div>
                </a>
              </div>
              <div className={hs('overview__stacks')}>
                <div className={hs('overview__environment')}>
                  <img src='https://img.shields.io/badge/VSCode-007ACC?logo=visual studio code' alt='vscode mark' />
                  <img src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white' alt='git mark' />
                  <img src='https://img.shields.io/badge/GitHub-181717?logo=github' alt='github mark' />
                </div>
                <div className={hs('overview__development')}>
                  <img src='https://img.shields.io/badge/HTML5-E34F26?logo=HTML5&logoColor=white' alt='HTML mark' />
                  <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=1572B6&logoColor=white' alt='CSS mark' />
                  <img src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white' alt='JS mark' />
                  <img src='/icon/arrow-right.png' alt='right arrow' />
                  <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white' alt='react mark' />
                  <img src='https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white' alt='Bootstrap mark' />
                  <img src='https://img.shields.io/badge/CSS-1572B6?logo=CSS3&logoColor=white' alt='CSS mark' />
                </div>
              </div>
            </div>
            <div className={hs('hosaroun__imgs')}>
              <div className={hs('hosaroun__imgs--desktop')}>
                <div className={hs('hosaroun__imgs--desktop-wrapper')}>
                  <img src='/img/hosaroun-desk-1.png' alt='hosaroun page' />
                  <img src='/img/hosaroun-desk-3.png' alt='hosaroun page' />
                </div>
              </div>
              <div className={hs('hosaroun__imgs--mobile')}>
                <div className={hs('hosaroun__imgs--mobile-wrapper')}>
                  <img src='/img/hosaroun-mobile-1.png' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-2.png' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-3.png' alt='hosaroun page' />
                  <img src='/img/hosaroun-mobile-4.png' alt='hosaroun page' />
                </div>
              </div>
            </div>
            <div className={hs('roadmaps')}></div>
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
