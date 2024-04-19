import { ArrowRightCircle, ArrowUpCircle, Clock12 } from 'lucide-react';

export default function MountainPostStats({ metadata }: { metadata: any }) {
  return (
    <div className='mb-8 flex items-center gap-8'>
      <p className='flex items-center gap-2'>
        <ArrowRightCircle size={24} strokeWidth={1.5} />{' '}
        <span>{metadata.distance}km</span>
      </p>
      <p className='flex items-center gap-2'>
        <ArrowUpCircle size={24} strokeWidth={1.5} />{' '}
        <span>{metadata.distance}m</span>
      </p>
      <p className='flex items-center gap-2'>
        <Clock12 size={24} strokeWidth={1.5} /> <span>6hrs 55mins</span>
      </p>
    </div>
  );
}
