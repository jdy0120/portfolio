import { AttachmentContentAttributes } from "../attachment-conent/attachment-content.type";
import { AttachmentImageAttributes } from "../attachment-image/attachment-image.type";
import { AttachmentThumbnailAttributes } from "../attachment-thumbnail/attachment-thumbnail.type";

export interface PostAttributes {
  id: number;
  title: string;
  description: string;
  slug: string;
  categoryId: number;
  metaDescription: string;
  viewCount?: number;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  contentFile?: AttachmentContentAttributes;
  thumbnails?: AttachmentThumbnailAttributes[];
  attachmentImages?: AttachmentImageAttributes[];
}
