import Image from 'next/image';
import NorthRidge from '@/public/img/stobbanwithpin/IMG_5801.jpeg';

export default function Page() {
  return (
    <div className='pb-24'>
      <div className='w-full pb-12 flex items-start'>
        <Image
          src={NorthRidge}
          alt='North ridge of Stob Ban'
          className='max-w-md mt-16 -mr-28 rounded-md z-10'
        />
        <div className='grow py-32 pl-40 pr-8 border flex flex-col gap-8'>
          <div>
            <h2 className='text-3xl font-semibold'>Stob Bàn with Pin</h2>
            <h3 className='text-foreground/80'>Some date thing here</h3>
          </div>

          <div className='text-foreground/80 flex flex-col gap-2'>
            <p>&rarr; 13.6km</p>
            <p>&uarr; 963m</p>
            <p>&circ; 6hr55mins</p>
          </div>

          <hr />
          <p className='text-lg font-medium'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            tempore atque, dignissimos amet, ullam aspernatur saepe corporis
            illo, harum quisquam rerum veniam.
          </p>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ab
            unde sint possimus iusto laudantium aperiam sapiente, aliquam
            temporibus corrupti minus quis enim rem ad velit quasi debitis,
            facere dolorem.
          </p>
        </div>
      </div>
      <div className='max-w-prose mx-auto flex flex-col gap-4'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ab unde
          sint possimus iusto laudantium aperiam sapiente, aliquam temporibus
          corrupti minus quis enim rem ad velit quasi debitis, facere dolorem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          assumenda molestias, fugit accusamus non ullam, accusantium quasi est
          in dolore iusto quaerat minima totam illum officiis possimus
          consequatur, sed tempore!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ab unde
          sint possimus iusto laudantium aperiam sapiente, aliquam temporibus
          corrupti minus quis enim rem ad velit quasi debitis, facere dolorem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          assumenda molestias, fugit accusamus non ullam, accusantium quasi est
          in dolore iusto quaerat minima totam illum officiis possimus
          consequatur, sed tempore!
        </p>
      </div>
    </div>
  );
}
