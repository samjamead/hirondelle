import { fetchPosts } from '@/_utils/fetchPosts';

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto pt-12 flex flex-col gap-8'>
        {posts && (
          <ul>
            {posts.map((post) => {
              return <li key={post.slug}>{post.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
