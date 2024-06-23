import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  // subsets: ['latin'],
  subsets: [],
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Wise Spending',
  description: 'Save your money with Wise Spending',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scaleable=no"
        />
        <meta name="color-scheme" content="dark" />
      </head>

      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
