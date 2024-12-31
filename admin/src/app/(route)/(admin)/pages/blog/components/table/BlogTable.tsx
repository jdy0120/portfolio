import React, { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";
import { usePostList } from "../../../../../../../apis/v1/blog/blog.query";
import { columns, DataType } from "./tabledata";
import { useRouter } from "next/navigation";
import { Pagination, Table } from "antd";
import DefaultButton from "../../../../../../../components/molecules/button/button";

const BlogTable = () => {
  const router = useRouter();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      page: 1,
      count: 10,
    },
  });
  const { page, count } = watch();
  const {
    data: postList,
    isLoading,
    refetch,
  } = usePostList({
    page,
    count,
  });

  const renderColumn = columns?.map((column) => {
    if (column.key === "update") {
      return {
        ...column,
        render: (update: string, _: any) => (
          <DefaultButton
            id={update}
            type="link"
            onClick={handleMove("update")}
            size="small"
          >
            수정
          </DefaultButton>
        ),
      };
    }
    return column;
  });

  const handleMove =
    (to: "create" | "update") =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (to === "create") {
        router.push(`blog/info/undefined`);
      } else {
        router.push(`blog/info/${e.currentTarget.id}`);
      }
    };

  useEffect(() => {
    refetch();
  }, [page, count]);

  return (
    <>
      <DefaultButton
        type="primary"
        width="384"
        height="40"
        onClick={handleMove("create")}
      >
        생성
      </DefaultButton>
      <Table<DataType>
        dataSource={postList?.data.map((post) => ({
          ...post,
          key: post.id.toString(),
          statusLabel: post.status ? "배포" : "미배포",
          update: post.id.toString(),
        }))}
        columns={renderColumn}
        pagination={false}
      />
      <Controller
        control={control}
        name="page"
        render={({ field }) => (
          <Pagination
            size="small"
            current={field.value}
            pageSize={count}
            total={postList?.count}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
};

export default BlogTable;
