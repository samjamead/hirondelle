import { fetchPosts } from '@/utils/fetchPosts';
import { dateStringToBinary } from '@/utils/helpers';
import PostList from '@/components/post-list';
import extraPosts from '@/data/posts.json';
import PageHero from '@/components/page-hero';

export const metadata = {
  title: 'Hirondelle',
};

export default async function Home() {
  const posts = await fetchPosts();

  const allPosts = [...extraPosts, ...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const parsedPosts = allPosts.map((post) => {
    const binaryDate = dateStringToBinary(post.date);
    return {
      ...post,
      binaryDate,
    };
  });

  return (
    <div className='w-full'>
      <div className='max-w-6xl mx-auto'>
        <PageHero>
          <h2 className='text-lg max-w-2xl text-balance font-inconsolata'>
            A list of posts, notes, and other things written or accumulated by
            Sam Mead.
          </h2>
        </PageHero>
        {posts && <PostList posts={parsedPosts} />}
      </div>
    </div>
  );
}
