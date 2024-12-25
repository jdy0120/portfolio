import { Theme } from "@emotion/react";
import Typography from "./typography";

const primaryColor = {
  bg: "#F9F9FA",
  bgHover: "#3B1C32",
  border: "#1A1A1D",
  borderHover: "#3B1C32",
  hover: "#6A1E55",
  default: "#1A1A1D",
  active: "#A64D79",
  textHover: "#4f7eff",
  text: "#2656f6",
  textActive: "#6A1E55",
};

const backgroundColor = {
  bg1: "#FFFFFF",
  bg2: "#F9F9FA",
  bg3: "#E6F1FD",
  bg4: "#EDEEFC",
  bg5: "#FFFFFFCC",
};

const black = {
  100: "#000000",
  80: "#000000CC",
  40: "#00000066",
  20: "#00000033",
  10: "#0000001A",
  4: "#0000000A",
};

const white = {
  100: "#FFFFFF",
  80: "#FFFFFFCC",
  40: "#FFFFFF66",
  20: "#FFFFFF33",
  10: "#FFFFFF1A",
  4: "#FFFFFF0A",
};

const theme: Theme = {
  colors: {
    primary: primaryColor,
    background: backgroundColor,
    white: white,
    black: black,
  },
  typography: Typography,
};

export { theme };
