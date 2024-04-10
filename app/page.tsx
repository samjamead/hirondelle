import { dateStringToBinary } from '@/_utils/helpers';
import posts from '@/_data/posts.json';
import PostList from '@/_components/post-list';
import { PostWithBinaryDate } from '@/_utils/types';

export default async function Home() {
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
        {parsedPosts && (
          <PostList posts={parsedPosts as PostWithBinaryDate[]} />
        )}
      </div>
    </div>
  );
}
