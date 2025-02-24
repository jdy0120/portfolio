import React, { forwardRef } from "react";

import {
  DefaultButtonContainer,
  DefaultButtonStyles,
} from "./button.styles";
import { DefaultButtonProps, DefaultButtonRef } from "./button.props";

const DefaultButton = forwardRef<
  DefaultButtonRef,
  DefaultButtonProps
>(({ children, ...props }, ref) => {
  const { width, height, ...rest } = props;
  return (
    <DefaultButtonContainer width={width} height={height}>
      <DefaultButtonStyles ref={ref} {...rest}>
        {children}
      </DefaultButtonStyles>
    </DefaultButtonContainer>
  );
});

export default DefaultButton;
