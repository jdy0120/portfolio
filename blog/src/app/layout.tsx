import type { Metadata } from "next";
import ReactQueryProvider from "../shared/providers/ReactQueryProvider";
import EmotionTheme from "../shared/providers/EmotionTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import RootStyleRegistry from "../shared/providers/RootStyleRegistry";

export const metadata: Metadata = {
  title: "Doyeonism Blog",
  description: "Welcome to Doyeonism Blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="ko">
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
