import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full min-h-40 p-8 rounded border border-yellow-400'>
      <article>{children}</article>
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
