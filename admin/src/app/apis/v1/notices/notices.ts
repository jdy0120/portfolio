import { Post } from "../../../../lib/axios/request";

const createNotice = async () => {
  try {
    const response = await Post("notices", {});
  } catch (error) {}
};

export { createNotice };
