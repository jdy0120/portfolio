import { ButtonProps } from "antd";

export type DefaultButtonRef = HTMLButtonElement;

export type DefaultProps = {
  width?: string;
  height?: string;
};

export type DefaultButtonProps = ButtonProps &
  React.RefAttributes<DefaultButtonRef> &
  DefaultProps;
