import Link from 'next/link';
import Nav from './nav';

export default function Header() {
  return (
    <div className='w-full'>
      <div className='max-w-4xl mx-auto py-5 flex justify-between items-baseline gap-8'>
        <Link href='/' className='text-lg hover:underline'>
          Hirondelle
        </Link>

        <Nav />
      </div>
    </div>
  );
}
