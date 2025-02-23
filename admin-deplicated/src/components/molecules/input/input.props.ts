import { InputProps, InputRef } from "antd";

export type DefaultInputRef = InputRef;

export type DefaultProps = {
  width?: string;
  height?: string;
};

export type DefaultInputProps = InputProps &
  React.RefAttributes<HTMLInputElement> &
  DefaultProps;
