import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { AxiosRequestConfig } from "axios";
import { YoutubeData } from "../../types/types";
import VideoContainer from "./VideoContainer";
import Titles from "../Titles/TItle";

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

const requestData = {
  url: `https://www.googleapis.com/youtube/v3/search?`,
  access_token: process.env.NEXT_PUBLIC_YOUTUBE_ACCESSTOKEN,
  channelId: `UCeVlsTPnmF7eWEPixBGpFGw`,
  type: `video`,
};

const header: AxiosRequestConfig<any> = {
  headers: { Accept: "application/json", "Accept-Encoding": "identity" },
};

const getYoutubeVideoDatas = async () => {
  const res = await axios.get(
    `${requestData.url}part=snippet&channelId=${requestData.channelId}&key=${requestData.access_token}&type=${requestData.type}`,
    header
  );

  return res.data;
};

const titleData = {
  title: `VIDEOS`,
  description: `Youtube Channel`,
};

const CareerPath = () => {
  const [videos, setVideos] = useState<YoutubeData[]>(notSettingItem);

  const getPosts = async () => {
    const response = await getYoutubeVideoDatas();

    setVideos(response.items);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles title={titleData.title} description={titleData.description} />
          <VideoContainer videos={videos} />
        </Container>
      </OutContainer>
    </Body>
  );
};

export default CareerPath;
