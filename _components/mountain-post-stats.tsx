import { ArrowRightCircle, ArrowUpCircle, Clock12 } from 'lucide-react';

interface MountainPostMetadata {
  distance?: number;
  elevation?: number;
  duration?: number;
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}hrs ${remainingMinutes}mins`;
}

export default function MountainPostStats({
  metadata,
}: {
  metadata: MountainPostMetadata;
}) {
  return (
    <div className='mb-8 flex items-center gap-8'>
      {metadata.distance && (
        <p className='flex items-center gap-2'>
          <ArrowRightCircle size={24} strokeWidth={1.5} />{' '}
          <span>{metadata.distance}km</span>
        </p>
      )}
      {metadata.elevation && (
        <p className='flex items-center gap-2'>
          <ArrowUpCircle size={24} strokeWidth={1.5} />{' '}
          <span>{metadata.elevation}m</span>
        </p>
      )}
      {metadata.duration && (
        <p className='flex items-center gap-2'>
          <Clock12 size={24} strokeWidth={1.5} />{' '}
          <span>{formatDuration(metadata.duration)}</span>
        </p>
      )}
    </div>
  );
}
