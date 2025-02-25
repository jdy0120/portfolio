import localFont from "next/font/local";
import ReactQueryProvider from "../lib/providers/ReactQueryProvider";
import EmotionTheme from "../lib/providers/EmotionTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import RootStyleRegistry from "../lib/providers/RootStyleRegistry";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="ko">
      <head></head>
      <body suppressHydrationWarning>
        <RootStyleRegistry>
          <ReactQueryProvider>
            <EmotionTheme>
              <NextIntlClientProvider
                locale={locale}
                messages={messages}
                timeZone="Asia/Seoul"
              >
                {children}
              </NextIntlClientProvider>
            </EmotionTheme>
          </ReactQueryProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
