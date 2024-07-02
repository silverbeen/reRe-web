import type { Metadata } from 'next';
import '../global.css';
import { Color } from '@repo/tailwind-config/theme';
import Header from 'components/header';
import Providers from 'components/Provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full h-full bg-background-gray-10`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
