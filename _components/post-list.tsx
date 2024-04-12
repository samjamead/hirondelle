'use client';

import { useState, useEffect } from 'react';
import { PostWithBinaryDate } from '@/_utils/types';
import Link from 'next/link';
import Quote from './quote';
import { useSearchParams } from 'next/navigation';
import * as d3 from 'd3';

const MountainStats = ({ posts }: { posts: PostWithBinaryDate[] }) => {
  const distance = d3.sum(posts, (p: PostWithBinaryDate) => p.distance);
  const elevation = d3.sum(posts, (p: PostWithBinaryDate) => p.elevation);
  const duration = d3.sum(posts, (p: PostWithBinaryDate) => p.duration);

  const time = `${(duration - (duration % 60)) / 60}hr ${duration % 60}min`;

  return (
    <div className='flex justify-between items-center gap-4'>
      <p>{d3.format(',.1f')(distance)}km</p>
      <p>{d3.format(',.1f')(elevation)}m</p>
      <p>{time}</p>
    </div>
  );
};

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
      <div className='flex justify-between items-center gap-8'>
        <p className='mb-16'>
          {category && <span>{category}: </span>}
          {postList.length} posts
        </p>
        {category && category === 'Mountains' && (
          <MountainStats posts={postList} />
        )}
      </div>

      <ul className='flex flex-col gap-8'>
        {postList.map((post) => {
          return (
            <li
              key={post.title}
              className='animate-in flex justify-start items-baseline gap-8'
            >
              {post.slug && (
                // Most posts

                <Link href={`/${post.slug}`} className='underline'>
                  {post.title}
                </Link>
              )}

              {post.title &&
                !post.slug &&
                // Coming soon posts

                post.title}

              {post.externalLink && (
                // Links to external posts, most frequently Observable
                <a
                  href={post.externalLink}
                  target='_blank'
                  className='underline'
                >
                  {post.title}
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
