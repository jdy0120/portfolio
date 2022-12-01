export type TistoryData = {
  categoryId: string;
  comments: string;
  date: string;
  id: string;
  postUrl: string;
  title: string;
  trackbacks: string;
  visibility: string;
};

export type YoutubeData = {
  kind: string;
  etag: string;
  id: YoutubeDataId;
  snippet: Snippet;
};

type YoutubeDataId = {
  kind: string;
  videoId: string;
};

type Snippet = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
};

type Thumbnails = {
  default: Video;
  medium: Video;
  high: Video;
};

type Video = {
  url: string;
  width: number;
  height: number;
};
