import { fetchPosts } from '@/_utils/fetchPosts';
import { dateStringToBinary } from '@/_utils/helpers';
import PostList from '@/_components/post-list';

export default async function Home() {
  const posts = await fetchPosts();

  const parsedPosts = posts.map((post) => {
    const binaryDate = dateStringToBinary(post.date);
    return {
      ...post,
      binaryDate,
    };
  });

  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto pt-12 flex flex-col gap-8'>
        {posts && <PostList posts={parsedPosts} />}
      </div>
    </div>
  );
}
