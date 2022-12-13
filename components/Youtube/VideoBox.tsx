import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeData } from "../../types/types";
import Image from "next/image";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border: 1px solid #232e35;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  img {
    transition: all 0.7s ease-out;
    width: 100%;
    height: auto;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    img {
      scale: 1.1;
    }
    .description {
      top: 70%;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: 30%;
  top: 100%;
  position: absolute;
  font-size: 0.8rem;
  color: white;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonText};
  transition: all 0.7s ease-out;
  border-radius: 10px 10px 0 0;
  padding: 10px;

  p {
    margin-top: 10px;
    font-size: 0.9rem;
  }
`;
interface Props {
  video: YoutubeData;
}

const VideoBox = ({ video }: Props) => {
  const [imageSrc, setImageSrc] = useState(video.snippet.thumbnails.high.url);
  const published = new Date(video.snippet.publishTime);
  const fadeInUp = useScrollFadeIn();

  const onError = () => {
    console.log("error image");
    setImageSrc(`/assets/logo.jpg`);
  };

  useEffect(() => {
    setImageSrc(video.snippet.thumbnails.high.url);
  }, []);
  return (
    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
      <Container {...fadeInUp}>
        <Image
          src={imageSrc}
          width={video.snippet.thumbnails.high.width}
          height={video.snippet.thumbnails.high.height}
          onError={onError}
          alt={`none`}
        />
        <Description className="description">
          <h1>{video.snippet.title}</h1>
          <p>
            {`${published.getFullYear()}년 ${published.getMonth()}월  ${published.getDate()}일`}
          </p>
        </Description>
      </Container>
    </a>
  );
};

export default VideoBox;
