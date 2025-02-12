import React from "react";
import { SVGProps } from "react";
import styled from "@emotion/styled";

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  color?: string;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
}

const SVGIcon = ({
  Icon,
  color,
  onClick,
  ...props
}: SVGIconProps) => {
  const { width, height, ...rest } = props;
  return (
    <IconStyles color={color} width={width} height={height}>
      <Icon {...rest} onClick={onClick} />
    </IconStyles>
  );
};

export default SVGIcon;

interface IconStylesProps {
  color?: string;
  width?: string | number;
  height?: string | number;
}

const IconStyles = styled.div<IconStylesProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;

  path {
    fill: ${({ color }) => color};

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    path {
      fill: #000;
    }
  }
`;
