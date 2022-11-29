import type { AppProps } from "next/app";
import Main from "../components/Main";
import { ThemeContextProvider } from "../context/themeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <Main />
    </ThemeContextProvider>
  );
}
