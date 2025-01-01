import localFont from "next/font/local";
import ReactQueryProvider from "../lib/providers/ReactQueryProvider";
import EmotionTheme from "../lib/providers/EmotionTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import RootStyleRegistry from "../lib/providers/RootStyleRegistry";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
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
