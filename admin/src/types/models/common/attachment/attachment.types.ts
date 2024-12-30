interface Attachment {
  id: number;
  filename: string;
  originalFilename: string;
  path: string;
  mimetype: string;
  size: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type { Attachment };
