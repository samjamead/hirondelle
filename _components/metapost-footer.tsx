export default function MetapostFooter({
  currentPage,
}: {
  currentPage: string;
}) {
  const metaposts = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Freelance',
      link: '/freelance',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className='mt-12 py-12 border-t-foreground/20'>
      <div className='mb-8'>
        <span className='px-2 py-1 text-sm rounded bg-purple-500/30'>
          Metaposts
        </span>
      </div>

      <div className='flex flex-col gap-4'>
        {metaposts
          .filter((post) => post.name != currentPage)
          .map((post) => {
            return (
              <p key={post.name}>
                <a className='underline' href={post.link}>
                  {post.name}
                </a>
              </p>
            );
          })}
      </div>
    </div>
  );
}
