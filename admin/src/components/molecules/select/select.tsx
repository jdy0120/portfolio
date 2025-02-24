import React, { forwardRef } from "react";

import {
  DefaultSelectContainer,
  DefaultSelectStyles,
} from "./select.styles";
import { DefaultSelectProps, DefaultSelectRef } from "./select.props";

const DefaultSelect = forwardRef<
  DefaultSelectRef,
  DefaultSelectProps
>((props, ref) => {
  const { width, height, ...rest } = props;

  return (
    <DefaultSelectContainer width={width} height={height}>
      <DefaultSelectStyles ref={ref} {...rest} />
    </DefaultSelectContainer>
  );
});

export default DefaultSelect;
