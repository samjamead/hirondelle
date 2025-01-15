import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/_components/header';
import Footer from '@/_components/footer';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hirondelle',
  description: 'Une petite liste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} ${jetBrainsMono.className} w-full min-h-screen px-4 font-light flex flex-col justify-start`}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          <main className='w-full max-w-4xl mx-auto'>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
