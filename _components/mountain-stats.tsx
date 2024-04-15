import * as d3 from 'd3';
import { PostWithBinaryDate } from '@/_utils/types';

const MountainStats = ({ posts }: { posts: PostWithBinaryDate[] }) => {
  const distance = d3.sum(posts, (p: PostWithBinaryDate) => p.distance);
  const elevation = d3.sum(posts, (p: PostWithBinaryDate) => p.elevation);
  const duration = d3.sum(posts, (p: PostWithBinaryDate) => p.duration);

  const time = `${(duration - (duration % 60)) / 60}hr ${duration % 60}min`;

  return (
    <div className='flex justify-between items-center gap-4'>
      <p>{d3.format(',.0f')(distance)}km</p>
      <p>{d3.format(',.0f')(elevation)}m</p>
      <p>{time}</p>
    </div>
  );
};

export default MountainStats;
