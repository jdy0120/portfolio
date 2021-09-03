type Keys = "Black" | "White";

interface ThemeDetail {
  backgroundColor: string;
  fontColor: string;
  buttonBackground: string;
  buttonFontColor: string;
}

type ThemeMode = {
  [k in Keys]: ThemeDetail;
};

export const themeMode: ThemeMode = {
  Black: {
    backgroundColor: "black",
    buttonBackground: "white",
    fontColor: "white",
    buttonFontColor: "black",
  },
  White: {
    backgroundColor: "white",
    buttonBackground: "black",
    fontColor: "black",
    buttonFontColor: "white",
  },
};
