import Link from 'next/link';
import './posts.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full'>
      <article className='pt-16 pb-24'>{children}</article>
    </div>
  );
}
