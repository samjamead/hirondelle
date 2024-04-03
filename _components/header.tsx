import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full'>
      <nav className='max-w-6xl mx-auto flex justify-between items-center gap-8'>
        <div className='py-2'>
          <Link href='/' className='text-sm font-mono hover:underline'>
            hirondelle
          </Link>
        </div>
        <div className='py-2'>
          <Link href='/' className='text-sm font-mono hover:underline'>
            hirondelle
          </Link>
        </div>
      </nav>
    </div>
  );
}
