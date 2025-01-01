import React, { useEffect, useState } from "react";
import { HeaderStyles } from "./Header.styles";
import {
  useForm,
  Controller,
  Control,
  UseFormSetValue,
} from "react-hook-form";
import { Radio } from "antd";
import DefaultInput from "../../../../../../../../../components/molecules/input/input";
import DefaultSelect from "../../../../../../../../../components/molecules/select/select";
import { Category } from "../../../../../../../../../types/models/v1/category/category.types";
import {
  useCategoryList,
  useCreateCategory,
} from "../../../../../../../../../apis/v1/category/category.query";
import { Post } from "../../../../../../../../../types/models/v1/blog/blog.types";
import DefaultButton from "../../../../../../../../../components/molecules/button/button";
import createSlug from "../../../../../../../../../utils/slug";

interface HeaderProps {
  control: Control<any>;
  setValue: UseFormSetValue<any>;
}

const Header = ({ control, setValue }: HeaderProps) => {
  const { mutate: createCategory } = useCreateCategory();
  const { data: categoryList, refetch } = useCategoryList();

  const [newCategoryName, setNewCategoryName] = useState("");

  const handleCreateCategory = () => {
    createCategory(
      { name: newCategoryName },
      {
        onSuccess: () => {
          setNewCategoryName("");
          refetch();
        },
      }
    );
  };

  return (
    <>
      <HeaderStyles.Container>
        <HeaderStyles.Label>제목</HeaderStyles.Label>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <DefaultInput
              variant="borderless"
              placeholder="제목을 입력해주세요."
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                setValue("slug", createSlug(e.target.value));
              }}
            />
          )}
        />
      </HeaderStyles.Container>
      <HeaderStyles.Container>
        <HeaderStyles.Label>Slug</HeaderStyles.Label>
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
      </HeaderStyles.Container>
      <HeaderStyles.Divider>
        <HeaderStyles.Container>
          <HeaderStyles.Label>카테고리</HeaderStyles.Label>
          <HeaderStyles.CategoryContainer>
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
                  style={{ width: "200px" }}
                />
              )}
            />
            <HeaderStyles.NewCategoryContainer>
              <DefaultInput
                variant="borderless"
                placeholder="카테고리 이름"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                style={{ width: "150px" }}
              />
              <DefaultButton
                type="text"
                onClick={handleCreateCategory}
              >
                카테고리 추가
              </DefaultButton>
            </HeaderStyles.NewCategoryContainer>
          </HeaderStyles.CategoryContainer>
        </HeaderStyles.Container>
        <HeaderStyles.Container>
          <HeaderStyles.Label>Post 상태</HeaderStyles.Label>
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
        </HeaderStyles.Container>
      </HeaderStyles.Divider>
    </>
  );
};

export default Header;
