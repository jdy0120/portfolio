import React from "react";
import { SVGProps } from "react";
import styled from "@emotion/styled";
import { motion } from "motion/react";

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  color?: string;
}

const SVGIcon = ({ Icon, color, ...props }: SVGIconProps) => {
  return (
    <IconStyles
      color={color}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Icon {...props} />
    </IconStyles>
  );
};

export default SVGIcon;

const IconStyles = styled(motion.div)<{ color?: string }>`
  cursor: pointer;

  path {
    fill: ${({ color }) => color};
  }
`;
