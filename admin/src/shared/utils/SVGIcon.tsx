import React from "react";
import { SVGProps } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  color?: string;
  isCursorPointer?: boolean;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
}

const SVGIcon = ({
  Icon,
  color,
  isCursorPointer = false,
  onClick,
  ...props
}: SVGIconProps) => {
  const { width, height, ...rest } = props;
  return (
    <IconStyles
      color={color}
      width={width}
      height={height}
      isCursorPointer={isCursorPointer}
    >
      <Icon {...rest} onClick={onClick} />
    </IconStyles>
  );
};

export default SVGIcon;

interface IconStylesProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  isCursorPointer?: boolean;
}

const IconStyles = styled.div<IconStylesProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ isCursorPointer }) =>
    isCursorPointer &&
    css`
      cursor: pointer;
    `}

  path {
    fill: ${({ color }) => color};

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    ${({ isCursorPointer }) =>
      isCursorPointer &&
      css`
        path {
          fill: #000;
        }
      `}
  }
`;
