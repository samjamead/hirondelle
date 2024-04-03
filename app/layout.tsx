import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/_components/header';
import Footer from '@/_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hirondelle',
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
        className={`${inter.className} w-full min-h-screen flex flex-col justify-start`}
      >
        <Header />
        <main className='w-full max-w-6xl mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
