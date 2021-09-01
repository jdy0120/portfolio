type Keys = "Black" | "White";

interface ThemeDetail {
  backgroundColor: string;
  buttonBackground: string;
  fontColor: string;
}

type ThemeMode = {
  [k in Keys]: ThemeDetail;
};

export const themeMode: ThemeMode = {
  Black: {
    backgroundColor: "black",
    buttonBackground: "white",
    fontColor: "black",
  },
  White: {
    backgroundColor: "white",
    buttonBackground: "black",
    fontColor: "white",
  },
};
