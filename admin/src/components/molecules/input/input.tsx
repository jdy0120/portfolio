import React, { forwardRef } from "react";

import { DefaultInputProps, DefaultInputRef } from "./input.props";
import {
  DefaultInputStyles,
  DefaultInputContainer,
} from "./input.styles";

const DefaultInput = forwardRef<DefaultInputRef, DefaultInputProps>(
  (props, ref) => {
    const { width, height, ...rest } = props;

    return (
      <DefaultInputContainer width={width} height={height}>
        <DefaultInputStyles ref={ref} {...rest} />
      </DefaultInputContainer>
    );
  }
);

export default DefaultInput;
