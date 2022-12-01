import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";

const requestData = {
  url: `https://www.googleapis.com/youtube/v3/search?`,
  access_token: process.env.YOUTUBE_ACCESSTOKEN,
  channelId: `UCeVlsTPnmF7eWEPixBGpFGw`,
  type: `video`,
};

const header: AxiosRequestConfig<any> = {
  headers: { Accept: "application/json", "Accept-Encoding": "identity" },
};

const getAccessToken = async () => {
  const res = await axios.get(
    `${requestData.url}part=snippet&channelId=${requestData.channelId}&key=${requestData.access_token}&type=${requestData.type}`,
    header
  );

  return res.data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getAccessToken();

  res.status(200).json({ response, requestData });
};

export default handler;
