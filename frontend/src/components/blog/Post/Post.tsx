'use client'

import React from 'react';
import Image from 'next/image';
import { RECENT_POSTS } from '@/app/data';

const Post = () => {
  return (
    <div className="bg-white mb-16 p-8 max-w-sm rounded-[25px] shadow-lg xl:w-[348px] xl:max-h-max">
      <h2 className="text-[#091156] text-base font-bold mb-8 xl:ml-4 xl:mt-9">Recent Posts</h2>
      <div className="space-y-[31px] xl:ml-3 mb-8">
        {RECENT_POSTS.map((post) => (
          <div key={post.id} className="flex gap-6">
            <div className="relative w-[82px] h-[82px] flex-shrink-0 xl:ml-[5px] xl:-mt-[5px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-xl object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-2 xl:-mt-[9px] xl:ml-[2px]">
              <p className="text-[#FF64AE] text-base tracking-wide font-semibold ">{post.date}</p>
              <h3 className="text-xs tracking-widest font-light leading-[18px] text-[#8B8B8B]">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;