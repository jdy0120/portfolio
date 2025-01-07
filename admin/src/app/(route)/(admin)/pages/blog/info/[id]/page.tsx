"use client";

import React, { useEffect, useState } from "react";
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
import { fetchPostContent } from "../../../../../../../apis/v1/blog/blog.api";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: postData, isLoading } = usePostItem(id as string);
  const { mutate: createOrUpdatePost } = usePostCreate(id as string);
  const [content, setContent] = useState<OutputData>({
    time: new Date().getTime(),
    blocks: [],
    version: "0",
  });

  const isUpdate = !!(id === "undefined" ? undefined : id);

  const { control, handleSubmit, setValue, getValues, reset } =
    useForm();

  const onSubmit = async (data: any) => {
    const jsonContent = JSON.stringify(content);
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
    router.push("/pages/blog");
  };

  useEffect(() => {
    const fetchContent = async () => {
      if (postData && !isLoading) {
        const { contentFile, attachmentImages, thumbnails, ...rest } =
          postData.data;

        const jsonFileResponse = await fetchPostContent(
          contentFile?.path || ""
        );
        setContent(jsonFileResponse);
        reset({
          ...rest,
        });
      }
    };
    fetchContent();
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
          <Header
            control={control}
            setValue={setValue}
            isUpdate={isUpdate}
          />
        </CreateBlogPageStyles.DescriptionContainer>
        <CreateBlogPageStyles.ContentContainer>
          <Content
            control={control}
            setValue={setValue}
            getValues={getValues}
            content={content}
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
