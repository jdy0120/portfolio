"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";
import DefaultButton from "../../../../../../../../../components/molecules/button/button";

const MarkdownEditor = dynamic(
  () =>
    import(
      "../../../../../../../../../components/molecules/editor/MarkdownEditor"
    ),
  { ssr: false }
);

const Content = () => {
  const [content, setContent] = useState<OutputData>({
    time: 1719830400000,
    blocks: [],
    version: "1",
  });

  const handleMetaDescription = async () => {};

  return (
    <>
      <MarkdownEditor
        data={content}
        onChange={(data) => setContent(data)}
        holder="editorjs"
      />
      <DefaultButton type="text" onClick={handleMetaDescription}>
        메타 설명 생성
      </DefaultButton>
    </>
  );
};

export default Content;
