import * as d3 from 'd3';

export default function PostHero({
  metadata,
}: {
  metadata: {
    title: string;
    date: string;
  };
}) {
  const dateString = d3.timeFormat('%a %d %b %Y')(new Date(metadata.date));

  return (
    <div className='pb-16'>
      <h1 className='text-xl max-w-xl font-medium'>{metadata.title}</h1>
      <span className='shrink text-xs text-white/80'>{dateString}</span>
    </div>
  );
}
