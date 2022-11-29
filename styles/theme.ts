const color = {
  purple: "#7e74f1",
  cinder: "#232e35",
  cinderLight: "#656d72",
  lightPurple: "#f5f3fe",
  lighterPurple: "#eae6fe",
  white: "#fff",
  black: "#1e1e1e",
  light1: "#fbfbfb",
  light2: "#f1f1f1",
  light3: "#f5f5f5",
  light4: "#d9d9d9",
};

const globalTheme = {
  buttonText: color.purple,
  buttonColor: color.lightPurple,
};

export const lighTheme = {
  primary: color.white,
  secondary: color.light1,
  title: color.cinder,
  subTitle: color.cinderLight,
  ...globalTheme,
};

export const darkTheme = {
  primary: color.black,
  secondary: color.black,
  title: color.light2,
  subTitle: color.cinderLight,
  ...globalTheme,
};
