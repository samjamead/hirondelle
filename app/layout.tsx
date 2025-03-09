import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
});

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
        className={`${inter.variable} ${inconsolata.variable} w-full min-h-screen px-4 font-light flex flex-col justify-start`}
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
