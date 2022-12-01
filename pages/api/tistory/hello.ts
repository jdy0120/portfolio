// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const requestData = {
  url: `https://www.tistory.com/apis/post/list?`,
  access_token: process.env.TISTORY_ACCESSTOKEN,
  blogName: `doyeonism`,
  output: `json`,
  page: `3`,
};

const getAccessToken = async (page: number): Promise<[]> => {
  const res = await axios.get(
    `${requestData.url}access_token=${requestData.access_token}&output=${requestData.output}&blogName=${requestData.blogName}&page=${page}`
  );

  return res.data.tistory.item.posts;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getAccessToken(1);
    res.status(200).json({ response });
  } catch (err) {
    res.status(400);
  }
};

export default handler;
