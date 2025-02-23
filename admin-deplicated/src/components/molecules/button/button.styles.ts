import styled from "@emotion/styled";
import { Button } from "antd";

import { DefaultButtonProps } from "./button.props";

export const DefaultButtonStyles = styled(Button)`
  width: 100%;
`;

export const DefaultButtonContainer = styled.div<DefaultButtonProps>`
  width: ${({ width }) => width + "px" || "100%"};
  height: ${({ height }) => height + "px" || "40px"};
`;
