import { WsAppShell } from '#/components/layouts/WsAppShell';
import { NProgressProviders } from '#/components/progress/NProgressProviders';
import { theme } from '#/styles/themes/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Noto_Sans_KR } from 'next/font/google';
import '../globals.css';

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

export async function generateStaticParams() {
  return ['ko', 'en'].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scaleable=no"
        />
        <meta name="color-scheme" content="dark" />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={notoSansKr.className}>
          <MantineProvider defaultColorScheme="dark" theme={theme}>
            <NProgressProviders>
              <WsAppShell>{children}</WsAppShell>
            </NProgressProviders>
          </MantineProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
