import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface NameStylesProps {
  size: "small" | "medium" | "large";
}

const NameStyles = styled.span<NameStylesProps>`
  ${({ theme }) => theme.typography.NameText}

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
          line-height: 16px;
        `;
      case "medium":
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
      case "large":
        return css`
          font-size: 24px;
          line-height: 32px;
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }}
`;

export { NameStyles };
