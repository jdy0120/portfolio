"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";

const MarkdownEditor = dynamic(
  () =>
    import(
      "../../../../../../../components/molecules/editor/MarkdownEditor"
    ),
  { ssr: false }
);

const Content = () => {
  const [content, setContent] = useState<OutputData>({
    time: 1719830400000,
    blocks: [],
    version: "1",
  });

  return (
    <MarkdownEditor
      data={content}
      onChange={(data) => setContent(data)}
      holder="editorjs"
    />
  );
};

export default Content;
