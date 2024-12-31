import { Post } from "../../../lib/axios/request";
import { Attachment } from "../../../types/models/common/attachment/attachment.types";

export const uploadToTemp = async (file: File) => {
  const formData = new FormData();
  formData.append("files", file);

  try {
    const response = await Post<Attachment[]>(
      "/common/v1/uploads/temp",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
