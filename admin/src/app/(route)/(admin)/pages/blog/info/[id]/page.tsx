"use client";

import React, { useEffect, useRef } from "react";
import { Form, CreateBlogPageStyles } from "./page.styles";
import { useParams, useRouter } from "next/navigation";
import {
  usePostCreate,
  usePostItem,
} from "../../../../../../../apis/v1/blog/blog.query";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { useForm } from "react-hook-form";
import DefaultButton from "../../../../../../../components/molecules/button/button";
import { OutputData } from "@editorjs/editorjs";
import { uploadToTempOriginFileName } from "../../../../../../../apis/v1/upload/uploadtotemp.api";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: postData, isLoading } = usePostItem(id as string);
  const { mutate: createOrUpdatePost } = usePostCreate(id as string);
  const contentRef = useRef<OutputData>({
    time: 1719830400000,
    blocks: [],
    version: "1",
  });

  const { control, handleSubmit, setValue, getValues, reset } =
    useForm();

  const onSubmit = async (data: any) => {
    const jsonContent = JSON.stringify(contentRef.current);
    const jsonFile = new File([jsonContent], `${data.slug}.json`, {
      type: "application/json",
    });
    const response = await uploadToTempOriginFileName(jsonFile);

    createOrUpdatePost(
      {
        ...data,
        contentFile: {
          id: response?.data[0].id,
        },
      },
      {
        onSuccess: () => {
          router.push("/pages/blog");
        },
      }
    );
  };

  const onCancel = () => {
    console.log("취소");
  };

  useEffect(() => {
    if (postData && !isLoading) {
      const {
        id,
        createdAt,
        updatedAt,
        deletedAt,
        contentFile,
        attachmentImages,
        thumbnails,
        ...rest
      } = postData.data;

      reset({
        ...rest,
      });
    }
  }, [postData]);

  return (
    <Form onSubmit={handleSubmit(onSubmit, onCancel)}>
      <CreateBlogPageStyles.Container
        onSubmit={handleSubmit(onSubmit, onCancel)}
      >
        <CreateBlogPageStyles.DescriptionContainer>
          <CreateBlogPageStyles.Title>
            포스트 글 쓰기
          </CreateBlogPageStyles.Title>
          <Header control={control} setValue={setValue} />
        </CreateBlogPageStyles.DescriptionContainer>
        <CreateBlogPageStyles.ContentContainer>
          <Content
            control={control}
            setValue={setValue}
            getValues={getValues}
            contentRef={contentRef}
          />
        </CreateBlogPageStyles.ContentContainer>
      </CreateBlogPageStyles.Container>
      <CreateBlogPageStyles.ButtonContainer>
        <DefaultButton>취소</DefaultButton>
        <DefaultButton type="primary" htmlType="submit">
          저장
        </DefaultButton>
      </CreateBlogPageStyles.ButtonContainer>
    </Form>
  );
};

export default page;
