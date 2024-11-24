import styled from "@emotion/styled";
import { Typography } from "antd";

const IntroText = styled(Typography.Title)`
  font-weight: 500 !important;
  font-size: 22px !important;
  line-height: 1.5 !important;
  padding: 0px 24px;
  font-family: "NEXON Lv2 Gothic Light" !important;
  /* font-weight: 300;
 */
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    font-size: 18px !important;
    font-weight: 350 !important;
  }
`;

const StackText = styled(Typography.Text)`
  font-weight: 300;
  font-size: 15px;
`;

const HashTag = styled(Typography.Paragraph)`
  font-weight: 300;
  padding: 0px 24px;
`;

export { IntroText, StackText, HashTag };
