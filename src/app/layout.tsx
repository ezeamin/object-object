import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import Script from 'next/script';

import '@/styles/globals.css';

import Footer from '@/components/Common/Footer';
import Header from '@/components/Common/Header';

const titillium = Titillium_Web({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '[object Object]',
  description: 'The best JS & TS boilerplate in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/10942c11e8.js"
        crossOrigin="anonymous"
        defer
      />
      <body className={titillium.className}>
        <Header />
        <main className="py-8 responsive-paddings mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
