"use client";

import React from "react";
import { CreateBlogPageStyles, ContentStyles } from "./page.styles";
import DefaultInput from "../../../../../../components/molecules/input/input";
import { useForm, Controller } from "react-hook-form";
import DefaultSelect from "../../../../../../components/molecules/select/select";
import { Image } from "antd";

const categoryOptions = [
  { label: "카테고리 1", value: "1" },
  { label: "카테고리 2", value: "2" },
  { label: "카테고리 3", value: "3" },
];

const page = () => {
  const { control, handleSubmit } = useForm();

  return (
    <CreateBlogPageStyles.Container>
      <CreateBlogPageStyles.DescriptionContainer>
        <CreateBlogPageStyles.Title>
          포스트 글 쓰기
        </CreateBlogPageStyles.Title>
        <ContentStyles.Container>
          <ContentStyles.Label>제목</ContentStyles.Label>
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <DefaultInput
                variant="borderless"
                placeholder="제목을 입력해주세요."
                value={value}
                onChange={onChange}
              />
            )}
          />
        </ContentStyles.Container>
        <ContentStyles.Container>
          <ContentStyles.Label>Slug</ContentStyles.Label>
          <Controller
            control={control}
            name="slug"
            render={({ field: { onChange, value } }) => (
              <DefaultInput
                variant="borderless"
                placeholder="Slug을 입력해주세요."
                value={value}
                onChange={onChange}
              />
            )}
          />
        </ContentStyles.Container>
        <CreateBlogPageStyles.Divider>
          <ContentStyles.Container>
            <ContentStyles.Label>카테고리</ContentStyles.Label>
            <Controller
              control={control}
              name="categoryId"
              render={({ field: { onChange, value } }) => (
                <DefaultSelect
                  variant="borderless"
                  options={categoryOptions}
                  placeholder="카테고리를 선택해주세요."
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </ContentStyles.Container>
          <ContentStyles.Container>
            <ContentStyles.Label>썸네일 업로드</ContentStyles.Label>
            <Controller
              control={control}
              name="imageUrl"
              render={({ field: { onChange, value } }) => (
                <Image
                  src={value}
                  placeholder="카테고리를 선택해주세요."
                  onChange={onChange}
                />
              )}
            />
          </ContentStyles.Container>
        </CreateBlogPageStyles.Divider>
      </CreateBlogPageStyles.DescriptionContainer>
    </CreateBlogPageStyles.Container>
  );
};

export default page;
