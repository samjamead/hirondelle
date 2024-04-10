import Image from 'next/image';
import rndGolfers from '@/public/img/posts/20150602-royal_north_devon.jpeg';

export default function Page() {
  return (
    <div className='py-12 max-w-prose flex flex-col gap-4'>
      <p>
        There will come a time where the photos we take today will be black and
        white to those who inhabit the internet.
      </p>
      <p>
        This is an on-again-off-again (mostly off again) blog. A record of my
        time so that I might in some way relate myself to those who&apos;ll come
        to replace us.
      </p>
      <Image src={rndGolfers} alt='Golfers at RND' />
    </div>
  );
}
