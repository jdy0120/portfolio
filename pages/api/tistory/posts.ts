import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const requestData = {
  url: `https://www.tistory.com/apis/post/list?`,
  access_token: process.env.NEXT_PUBLIC_TISTORY_ACCESSTOKEN,
  blogName: `doyeonism`,
  output: `json`,
  page: `1`,
};

const getAccessToken = async () => {
  const res = await axios.get(
    `${requestData.url}access_token=${requestData.access_token}&output=${requestData.output}&blogName=${requestData.blogName}&page=${requestData.page}`
  );

  return res.data.tistory.item.posts;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getAccessToken();

  res.status(200).json(response);
};

export default handler;
