import "@emotion/react";
import { SerializedStyles } from "@emotion/react";

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

interface BackgroundColor {
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
}

interface White {
  [key: number]: string;
}

interface Black {
  [key: number]: string;
}

interface Typography {
  semibold: {
    [key: number]: SerializedStyles;
  };
  regular: {
    [key: number]: SerializedStyles;
  };
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: Palette;
      background: BackgroundColor;
      white: White;
      black: Black;
    };
    typography: Typography;
  }
}
