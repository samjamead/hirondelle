'use client';

import { useState } from 'react';
import { Minimize2 } from 'lucide-react';

export default function Quote({
  quote,
  attribution,
  attributionLink,
}: {
  quote: string;
  attribution: string;
  attributionLink?: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div className='relative max-w-prose text-sm'>
      <p className='leading-7 mb-1 font-light'>
        {quote.slice(0, isOpen ? quote.length : 150)}

        {!isOpen && (
          <button
            className='inline-block ml-1 p-1 leading-[6px] align-middle text-xs bg-gray-600 rounded'
            onClick={toggleOpen}
          >
            •••
          </button>
        )}
      </p>
      {attributionLink ? (
        <p className='text-foreground/80'>
          &mdash;
          <a href={attributionLink} target='_blank' className='hover:underline'>
            {attribution}
          </a>
        </p>
      ) : (
        <p className='text-foreground/80'>&mdash;{attribution}</p>
      )}

      {isOpen && (
        <button
          className='absolute right-0 bottom-0 inline-block p-1.5 bg-gray-600 rounded'
          onClick={toggleOpen}
        >
          <Minimize2 size={16} />
        </button>
      )}
    </div>
  );
}
