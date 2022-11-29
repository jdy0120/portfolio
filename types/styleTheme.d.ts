import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    title: string;
    subTitle: string;
    buttonText: string;
    buttonColor: string;
  }
}
