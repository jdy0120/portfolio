"use client";

import React from "react";
import dynamic from "next/dynamic";

import { OutputBlockData, OutputData } from "@editorjs/editorjs";
import DefaultButton from "../../../../../../../../../components/molecules/button/button";
import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { uploadToTemp } from "../../../../../../../../../apis/v1/upload/uploadtotemp.api";
import { ContentStyles } from "./Content.styles";
import DefaultInput from "../../../../../../../../../components/molecules/input/input";

const MarkdownEditor = dynamic(
  () =>
    import(
      "../../../../../../../../../components/molecules/editor/MarkdownEditor"
    ),
  { ssr: false }
);

interface ContentProps {
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  contentRef: React.RefObject<OutputData | null>;
}

const Content = ({
  control,
  setValue,
  getValues,
  contentRef,
}: ContentProps) => {
  const uploadByFile = async (file: File) => {
    const res = await uploadToTemp(file);
    setValue("attachmentImages", [
      ...(getValues("attachmentImages") || []),
      { id: res?.data[0].id },
    ]);

    return {
      success: 1,
      file: {
        url: `http://localhost:3333/${res?.data[0].path}`,
      },
    };
  };

  const handleMetaDescription = async () => {};

  return (
    <>
      <MarkdownEditor
        data={contentRef.current as OutputData}
        onChange={(data) => {
          if (contentRef.current) {
            contentRef.current.blocks = data.blocks;
          }
        }}
        holder="editorjs"
        uploadByFile={uploadByFile}
      />
      <DefaultButton type="text" onClick={handleMetaDescription}>
        Description 생성
      </DefaultButton>
      <ContentStyles.Container>
        <ContentStyles.Label>Description</ContentStyles.Label>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <DefaultInput
              variant="borderless"
              placeholder="Description을 입력해주세요."
              value={value}
              onChange={onChange}
            />
          )}
        />
      </ContentStyles.Container>
      <ContentStyles.Container>
        <ContentStyles.Label>Meta Description</ContentStyles.Label>
        <Controller
          control={control}
          name="metaDescription"
          render={({ field: { onChange, value } }) => (
            <DefaultInput
              variant="borderless"
              placeholder="Meta Description을 입력해주세요."
              value={value}
              onChange={onChange}
            />
          )}
        />
      </ContentStyles.Container>
    </>
  );
};

export default Content;
