import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { YoutubeData } from "../../types/types";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  video: YoutubeData;
}

const VideoBox = ({ video }: Props) => {
  const [imageSrc, setImageSrc] = useState(video.snippet.thumbnails.high.url);

  const onError = () => {
    console.log("error image");
    setImageSrc(`/assets/logo.jpg`);
  };

  useEffect(() => {
    setImageSrc(video.snippet.thumbnails.high.url);
  }, []);
  return (
    <Container>
      <Image
        src={imageSrc}
        width={video.snippet.thumbnails.high.width}
        height={video.snippet.thumbnails.high.height}
        onError={onError}
        alt={`none`}
      />
    </Container>
  );
};

export default VideoBox;
