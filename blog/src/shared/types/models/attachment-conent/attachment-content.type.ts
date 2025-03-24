import { PostAttributes } from "../post/post.type";

export interface AttachmentContentAttributes {
  id: number;
  filename: string;
  originalFilename: string;
  path: string;
  mimetype: string;
  size: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  post: PostAttributes;
}
