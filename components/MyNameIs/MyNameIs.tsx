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
  @media (max-width: 820px) {
    flex-direction: column;
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
                {`Doyeon `}
                <span>{`Cho.`}</span>
              </h1>
            </Name>
            <Description>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</Description>
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
