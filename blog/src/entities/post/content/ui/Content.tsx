import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import Author from "@/features/post/author/ui/Author";
import Tags from "@/features/post/tags/ui/Tags";
import Profile from "@/features/post/profile/Profile";
import { AttachmentContentAttributes } from "@/shared/types/models/attachment-conent/attachment-content.type";
import { AttachmentImageAttributes } from "@/shared/types/models/attachment-image/attachment-image.type";
import { getContentJsonFile } from "../apis/file.api";

interface ContentProps {
  contentFile: AttachmentContentAttributes | undefined;
  attachmentImages: AttachmentImageAttributes[];
}

const Content = ({ contentFile, attachmentImages }: ContentProps) => {
  const [jsonContent, setJsonContent] = useState<any>(null);

  useEffect(() => {
    const fetchJsonContent = async () => {
      const content = await getContentJsonFile(contentFile?.path);
      setJsonContent(content);
    };
    fetchJsonContent();
  }, [contentFile?.path]);

  console.log(jsonContent);

  return (
    <div className={styles.Container}>
      <Author />
      <Tags />

      <Profile />
    </div>
  );
};

export default Content;
