import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeData } from "../../types/types";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border: 1px solid #232e35;
  border-radius: 10px;
  overflow: hidden;

  img {
    transition: all 0.7s ease-out;
    width: 100%;
    height: auto;
  }

  &:hover {
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
  background-color: black;
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

  const onError = () => {
    console.log("error image");
    setImageSrc(`/assets/logo.jpg`);
  };

  useEffect(() => {
    setImageSrc(video.snippet.thumbnails.high.url);
  }, []);
  return (
    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
      <Container>
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
