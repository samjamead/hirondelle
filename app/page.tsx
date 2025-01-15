import { fetchPosts } from '@/_utils/fetchPosts';
import { dateStringToBinary } from '@/_utils/helpers';
import PostList from '@/_components/post-list';
import extraPosts from '@/_data/posts.json';
import PageHero from '@/_components/page-hero';

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
          <h2 className='text-2xl max-w-2xl font-bold leading-relaxed font-merriweather'>
            A list of posts, notes, and other things written or accumulated by
            Sam Mead.
          </h2>
        </PageHero>
        {posts && <PostList posts={parsedPosts} />}
      </div>
    </div>
  );
}
