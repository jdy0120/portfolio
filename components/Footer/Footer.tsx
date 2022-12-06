import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import gitHubLight from "public/assets/Github.png";
import gitHubDark from "public/assets/Github_negative.png";
import youtubeLight from "public/assets/youtube.png";
import youtubeDark from "public/assets/youtube_negative.png";
import blogLight from "public/assets/blogger.png";
import blogDark from "public/assets/blogger_negative.png";
import { useThemeContext } from "../../context/themeContext";
import Arrow from "public/assets/arrow.png";
import kakao from "public/assets/kakaoconsult.png";

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

const Container = styled.footer`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.title};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  img {
    width: 2rem;
    height: 2rem;
    margin: 10px;
  }
`;

interface ToggleProps {
  toggleBtn: boolean;
}

const Toggle = styled.div<ToggleProps>`
  background-color: ${({ theme }) => theme.buttonText};
  padding: 1rem;
  border-radius: 20px;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  ${({ toggleBtn }) => {
    return toggleBtn
      ? css`
          animation: fade-in 1s;
          display: flex;
        `
      : css`
          display: none;
        `;
  }}
  @keyframes
    fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const ConsultToggle = styled(Toggle)`
  padding: 0;
  margin: 0;
  right: 6rem;
  background: none;
  img {
    width: 6rem;
    height: auto;
  }
`;

const Footer = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const { theme } = useThemeContext();

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Body>
      <OutContainer>
        <Container>
          <div>
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
            <p>Copyright © 2022 doyeon</p>
            <address>
              Contact doyeon for more information. 010-9489-9904
            </address>
          </div>
          <ConsultToggle toggleBtn={toggleBtn}>
            <a href="http://pf.kakao.com/_hqgfxj" target="_blank">
              <Image src={kakao} alt={`consult`} />
            </a>
          </ConsultToggle>
          <Toggle onClick={goToTop} toggleBtn={toggleBtn}>
            <Image src={Arrow} alt={`none`}></Image>
          </Toggle>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default Footer;
