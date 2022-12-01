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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
