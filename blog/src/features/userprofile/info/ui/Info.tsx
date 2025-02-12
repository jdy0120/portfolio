import React from "react";
import { InfoStyles } from "./Info.styles";
import dayjs from "dayjs";

const Info = () => {
  const years = dayjs().diff(dayjs("2021-07-02"), "year");
  return <InfoStyles>프론트엔드 개발자 | {years}년차</InfoStyles>;
};

export default Info;
