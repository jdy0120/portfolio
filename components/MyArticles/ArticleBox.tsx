import React from "react";
import { TistoryData } from "../../types/types";

interface Props {
  data: TistoryData;
}

const ArticleBox = ({ data }: Props) => {
  return <div>{data.title}</div>;
};

export default ArticleBox;
