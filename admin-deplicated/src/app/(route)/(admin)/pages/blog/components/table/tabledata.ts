import type { TableProps } from "antd";

import { Post } from "../../../../../../../types/models/v1/blog/blog.types";
type ColumnsType<T extends object> = TableProps<T>["columns"];

type DataType = {
  key: string;
  update: React.ReactNode;
} & Partial<Post>;

const columns: ColumnsType<DataType> = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "title",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "slug",
    dataIndex: "slug",
    key: "slug",
    align: "center",
  },
  {
    title: "viewCount",
    dataIndex: "viewCount",
    key: "viewCount",
    align: "center",
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "update",
    dataIndex: "update",
    key: "update",
    align: "center",
  },
  {
    title: "updatedAt",
    dataIndex: "updatedAt",
    key: "updatedAt",
    align: "center",
  },
];

export type { DataType };
export { columns };
