"use client";

import React, { useEffect } from "react";
import { CreateBlogPageStyles, ContentStyles } from "./page.styles";
import DefaultInput from "../../../../../../../components/molecules/input/input";
import { useForm, Controller } from "react-hook-form";
import DefaultSelect from "../../../../../../../components/molecules/select/select";
import { Image, Radio } from "antd";
import { useParams } from "next/navigation";
import { usePostItem } from "../../../../../../apis/v1/blog/blog.query";
import { useCategoryList } from "../../../../../../apis/v1/category/category.query";
import { Category } from "../../../../../../../types/models/v1/category/category.types";

const page = () => {
  const { control, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const { data: postData } = usePostItem(id as string);
  const { data: categoryList } = useCategoryList();

  useEffect(() => {
    if (postData) {
      setValue("title", postData.data.title);
      setValue("slug", postData.data.slug);
      setValue("categoryId", postData.data.categoryId);
      setValue("status", postData.data.status);
    }
  }, [postData]);

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
                  options={categoryList?.data.map(
                    (category: Category) => ({
                      label: category.name,
                      value: category.id,
                    })
                  )}
                  placeholder="카테고리를 선택해주세요."
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </ContentStyles.Container>
          <ContentStyles.Container>
            <ContentStyles.Label>Post 상태</ContentStyles.Label>
            <Controller
              control={control}
              name="status"
              render={({ field: { onChange, value } }) => (
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={true}>배포</Radio>
                  <Radio value={false}>미배포</Radio>
                </Radio.Group>
              )}
            />
          </ContentStyles.Container>
        </CreateBlogPageStyles.Divider>
      </CreateBlogPageStyles.DescriptionContainer>
    </CreateBlogPageStyles.Container>
  );
};

export default page;
