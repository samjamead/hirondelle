import Link from 'next/link';
import './posts.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full'>
      <article className='pt-12 pb-24'>{children}</article>
      <hr className='my-8 border-t border-foreground/20' />
      <div>
        <p>
          &larr;{' '}
          <Link href='/' className='text-sm hover:underline'>
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}
