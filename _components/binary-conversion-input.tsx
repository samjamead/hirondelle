'use client';
import { dateStringToBinary } from '@/_utils/helpers';
import { useState } from 'react';
import { ChevronsRight } from 'lucide-react';

export default function BinaryConversionInput() {
  const [dateString, setDatestring] = useState<string>();
  const [binaryDate, setBinaryDate] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDatestring(value);
    setBinaryDate(dateStringToBinary(value));
  };

  return (
    <div className='max-w-md my-12 px-8 py-12 bg-purple-500/10 rounded-md shadow-md flex flex-col gap-6'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col gap-4'
      >
        <input
          type='text'
          name='dateString'
          id='dateString'
          onChange={handleChange}
          placeholder='1990-03-12'
          className='p-2 bg-background border border-foreground/50 rounded'
        />
        <label
          htmlFor='dateString'
          className='p-2 text-sm font-mono text-foreground/80 bg-purple-500/25 rounded flex items-center gap-2'
        >
          <span>
            <ChevronsRight size={18} />
          </span>
          {dateString && binaryDate && dateString.length === 10
            ? binaryDate
            : "Add a date in the format 'yyyy-mm-dd'"}
        </label>
      </form>
    </div>
  );
}
