import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./locale";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();

  const messages = {
    ...(await import(`./locales/${locale}/index.ts`)).default,
  };

  return {
    locale,
    messages,
  };
});
