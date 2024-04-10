'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  {
    name: 'All',
    link: '/',
  },
  {
    name: 'Metaposts',
    link: '/?category=Metapost',
  },
  {
    name: 'Mountain Days',
    link: '/?category=Mountains',
  },
  {
    name: 'Code & Data',
    link: '/?category=Code',
  },
  {
    name: 'Quotes',
    link: '/?category=Quotes',
  },
];

export default function Nav() {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  return (
    <nav>
      <ul className='flex justify-between items-center gap-6'>
        {menuItems.map(({ name, link }) => {
          return (
            <li key={name}>
              <Link
                href={link}
                className={`text-sm ${
                  category && link.includes(category)
                    ? 'text-white font-normal'
                    : 'text-foreground/80 hover:text-white hover:underline'
                }  transition-all`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
