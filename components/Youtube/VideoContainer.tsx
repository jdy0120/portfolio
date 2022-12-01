import React from "react";
import { YoutubeData } from "../../types/types";
import styled from "styled-components";
import VideoBox from "./VideoBox";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid red;
`;

interface Props {
  videos: YoutubeData[];
}

const VideoContainer = ({ videos }: Props) => {
  return (
    <Container>
      {videos?.map((data: YoutubeData) => {
        return <VideoBox key={data.id.videoId} video={data} />;
      })}
    </Container>
  );
};

export default VideoContainer;
