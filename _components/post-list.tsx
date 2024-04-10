'use client';

import { useState, useEffect } from 'react';
import { PostWithBinaryDate } from '@/_utils/types';
import Link from 'next/link';
import Quote from './quote';
import { useSearchParams } from 'next/navigation';

export default function PostList({ posts }: { posts: PostWithBinaryDate[] }) {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');

  const [postList, setPostList] = useState<PostWithBinaryDate[]>(posts);

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      category ? post.category === category : post
    );
    setPostList(filteredPosts);
  }, [category, posts]);

  return (
    <div>
      <p className='mb-16'>
        {category && <span>{category}: </span>}
        {postList.length} posts
      </p>
      <ul className='flex flex-col gap-8'>
        {postList.map((post) => {
          return (
            <li
              key={post.binaryDate}
              className='animate-in flex justify-start items-baseline gap-8'
            >
              {post.link && (
                // Most posts

                <Link href={post.link} className='underline'>
                  {post.name}
                </Link>
              )}

              {post.name &&
                !post.external &&
                !post.link &&
                // Coming soon posts

                post.name}

              {post.external && (
                // Links to external posts, most frequently Observable
                <a href={post.external} target='_blank' className='underline'>
                  {post.name}
                </a>
              )}

              {post.quote && post.attribution && (
                // Quotes
                <Quote
                  quote={post.quote}
                  attribution={post.attribution}
                  attributionLink={post.attributionLink}
                />
              )}

              <div className='grow'>
                <hr className='border-t-white/10' />
              </div>

              <span className='shrink font-mono text-xs text-white/70'>
                {post.binaryDate}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
