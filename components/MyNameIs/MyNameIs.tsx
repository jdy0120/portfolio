import React from "react";
import styled from "styled-components";
import gitHubLight from "public/assets/Github.png";
import gitHubDark from "public/assets/Github_negative.png";
import youtubeLight from "public/assets/youtube.png";
import youtubeDark from "public/assets/youtube_negative.png";
import blogLight from "public/assets/blogger.png";
import blogDark from "public/assets/blogger_negative.png";
import { useThemeContext } from "../../context/themeContext";
import Image from "next/image";
import ProfileImage from "./ProfileImage";

const logo: { [key: string]: { [key: string]: StaticImageData } } = {
  light: { github: gitHubLight, youtube: youtubeLight, blog: blogLight },
  dark: { github: gitHubDark, youtube: youtubeDark, blog: blogDark },
};

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90vh;
  align-items: center;
  p {
    line-height: 2;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    p {
      line-height: 1.25;
    }
  }
`;

const Introduce = styled.div`
  width: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  hr {
    width: 1rem;
    border: 1px solid ${({ theme }) => theme.title};
  }

  p {
    margin: 0 10px 0 10px;
    color: ${({ theme }) => theme.subTitle};
    font-weight: bold;
    letter-spacing: 10px;
  }
`;

const Name = styled.div`
  h1 {
    color: ${({ theme }) => theme.title};
    font-size: 3.5rem;
  }

  span {
    color: ${({ theme }) => theme.buttonText};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.title};
  font-weight: 600;
  font-size: 1.1rem;
`;

const MyImage = styled.div`
  width: 50%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin: 10px;
  }
`;

const MyNameIs = () => {
  const { theme } = useThemeContext();

  return (
    <Body>
      <OutContainer>
        <Container>
          <Introduce>
            <Title>
              <div>
                <hr />
              </div>
              <p>{`MY NAME IS`}</p>
            </Title>
            <Name>
              <h1>
                {`프론트엔드 `}
                <span>{`도여니즘`}</span>
              </h1>
            </Name>
            <Description>
              {`프론트엔드 개발자 조도연입니다.`}
              <br />
              {`예쁘게만 만드는 프론트엔드 개발은 이제 끝났습니다.`}
              <br />
              {`웹과 사용자 간의 상호작용이 많아지고 브라우저가 하는 일이 많아짐에 따라 웹사이트는 무거워졌고 자칫 잘못하면 렌더링 5초 초과라는 심각한 문제를 가져올 수 있습니다.`}
              <br />
              {`(설명한 심각한 문제는 직접 경험해본 문제입니다. 보통 렌더링시간 5초가 넘으면 유저이탈율이 80%가 넘게 됩니다.)`}
              <br />
              {`나만 만족하기 위해 단순히 디자인만 신경 쓴 프론트엔드 개발은 제가 목표하는 개발이 아닙니다. 아무도 들어오지 않는 웹사이트는 없는 웹사이트이기 때문입니다.`}
              <br />
              <br />
              {`제가 아는 것과 모르는 것을 확인하고 많은 분들에게 저 라는 사람을 알리기 위해 포트폴리오 사이트를 만들었습니다.`}
              <br />
              {`사이트를 천천히 살펴보시고 저에 대해 궁금하거나 알고싶다면 연락주세요.`}
              <br />
            </Description>
            <IconContainer>
              <a href="https://github.com/jdy0120">
                <Image src={logo[theme][`github`]} alt={`깃허브`}></Image>
              </a>
              <a href="https://blog.doyeonism.com/">
                <Image src={logo[theme][`blog`]} alt={`블로그`}></Image>
              </a>
              <a href="https://www.youtube.com/channel/UCeVlsTPnmF7eWEPixBGpFGw">
                <Image src={logo[theme][`youtube`]} alt={`유튜브`}></Image>
              </a>
            </IconContainer>
          </Introduce>

          <MyImage>
            <ProfileImage />
          </MyImage>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyNameIs;
