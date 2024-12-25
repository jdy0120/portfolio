import type { Metadata } from "next";
import localFont from "next/font/local";
import ReactQueryProvider from "../lib/providers/ReactQueryProvider";
import EmotionTheme from "../lib/providers/EmotionTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LoginCheck from "../lib/providers/LoginCheck";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <head>
        <title>My App</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
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
      </body>
    </html>
  );
}
