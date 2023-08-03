import type { Metadata } from 'next';
import Script from 'next/script';

import NextAuthSessionProvider from '../providers/sessionProvider';
import Footer from '@/components/Common/Footer';
import Header from '@/components/Common/Header';
import UpButton from '@/components/Common/UpButton';

import { titillium } from '@/styles/fonts';
import '@/styles/globals.css';

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
        <NextAuthSessionProvider>
          <Header />
          <main id="main" className="md:pt-6 pb-8 mt-16">
            {children}
          </main>
          <Footer />

          <UpButton />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
