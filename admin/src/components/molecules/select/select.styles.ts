import styled from "@emotion/styled";
import { Select } from "antd";

import { DefaultSelectProps } from "./select.props";

export const DefaultSelectStyles = styled(Select)`
  width: 100%;
  height: 100%;
`;

export const DefaultSelectContainer = styled.div<DefaultSelectProps>`
  width: ${({ width }) => width + "px" || "100%"};
  height: ${({ height }) => height + "px" || "40px"};
`;
