import { SelectProps, RefSelectProps } from "antd";

export type DefaultSelectRef = RefSelectProps & HTMLSelectElement;

export type DefaultProps = {
  width?: string;
  height?: string;
};

export type DefaultSelectProps = SelectProps &
  React.RefAttributes<DefaultSelectRef> &
  DefaultProps;
