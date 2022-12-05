import React from "react";
import { YoutubeData } from "../../types/types";
import styled from "styled-components";
import VideoBox from "./VideoBox";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.3rem;

  @media (max-width: 1600px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 820px) {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    transition: all 0.7s ease-out;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

interface Props {
  videos: YoutubeData[];
}

const VideoContainer = ({ videos }: Props) => {
  const sortedVideos = videos
    .sort((a, b) => {
      const aDate = new Date(a.snippet.publishTime);
      const bDate = new Date(b.snippet.publishTime);

      return bDate.getTime() - aDate.getTime();
    })
    .filter((a, idx) => {
      if (idx > 4) {
        return false;
      }
      return true;
    });

  return (
    <Container>
      {sortedVideos?.map((data: YoutubeData) => {
        return <VideoBox key={data.id.videoId} video={data} />;
      })}
    </Container>
  );
};

export default VideoContainer;
