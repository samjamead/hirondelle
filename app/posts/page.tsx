import Link from 'next/link';

export const frontmatter = {
  name: 'Posts',
};

export default function Page() {
  return (
    <p>
      Nothing to see here.{' '}
      <Link href='/' className='underline'>
        Go here
      </Link>{' '}
      instead.
    </p>
  );
}
