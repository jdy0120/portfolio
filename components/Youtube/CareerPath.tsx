import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Titles from "./Titles";
import axios from "axios";
import { YoutubeData } from "../../types/types";
import VideoContainer from "./VideoContainer";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const notSettingItem = [
  {
    kind: "youtube#searchResult",
    etag: "nTcxu9NDv8iZMlrdEHzifPQGyG8",
    id: {
      kind: "youtube#video",
      videoId: "Ipc8NzFF9kE",
    },
    snippet: {
      publishedAt: new Date(`2022-11-15T16:00:04Z`),
      channelId: "UCeVlsTPnmF7eWEPixBGpFGw",
      title: "[리액트 따라하며 배우기] 간단한 투두리스트 React+typescript",
      description:
        "cra를 이용해 리액트 프로젝트를 생성하고 간단한 상태관리로 todolist를 만들어봅니다. os: window react -v: 18.2.0 github repository: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Ipc8NzFF9kE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Ipc8NzFF9kE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Ipc8NzFF9kE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Doyeonism",
      liveBroadcastContent: "none",
      publishTime: new Date("2022-11-15T16:00:04Z"),
    },
  },
];

const CareerPath = () => {
  const [videos, setVideos] = useState<YoutubeData[]>(notSettingItem);

  const getPosts = async () => {
    const response = await axios.get(`/api/youtube/posts`);

    setVideos(response.data.items);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles />
          <VideoContainer videos={videos} />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default CareerPath;
