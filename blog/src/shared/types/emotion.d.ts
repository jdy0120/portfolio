import "@emotion/react";

interface Palette {
  bg: string;
  bgHover: string;
  border: string;
  borderHover: string;
  hover: string;
  default: string;
  active: string;
  textHover: string;
  text: string;
  textActive: string;
}

interface Gradient {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface MonoColor {
  default: string;
  info: string;
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: Palette;
      white: MonoColor;
      black: string;
      gray: Gradient;
      negative: string;
    };
  }
}
