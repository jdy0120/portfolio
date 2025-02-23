import styled from "@emotion/styled";
import { Input } from "antd";

import { DefaultInputProps } from "./input.props";

export const DefaultInputStyles = styled(Input)`
  width: 100%;
  height: 100%;
`;

export const DefaultInputContainer = styled.div<DefaultInputProps>`
  width: ${({ width }) => width + "px" || "100%"};
  height: ${({ height }) => height + "px" || "40px"};
`;
