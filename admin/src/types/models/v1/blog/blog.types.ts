import { Attachment } from "../../common/attachment/attachment.types";

interface Post {
  id: number;
  title: string;
  description: string;
  filePath: string;
  slug: string;
  categoryId: number;
  metaDescription: string;
  viewCount: number;
  status: boolean;
  attachments?: Attachment[];
  thumbnails?: Attachment[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type { Post };
