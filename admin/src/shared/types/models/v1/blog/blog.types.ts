import { Attachment } from "../../common/attachment/attachment.types";

interface Post {
  id: number;
  title: string;
  description: string;
  slug: string;
  categoryId: number;
  metaDescription: string;
  viewCount?: number;
  status: boolean;
  contentFile: Partial<Attachment>;
  attachmentImages?: Partial<Attachment>[];
  thumbnails?: Partial<Attachment>[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

type RequestPostType = Omit<
  Post,
  "id" | "viewCount" | "createdAt" | "updatedAt" | "deletedAt"
>;

export type { Post, RequestPostType };
