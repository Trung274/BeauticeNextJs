'use client'

import React from 'react';
import { RECENT_POSTS } from '@/app/data';

const Post = () => {
  return (
    <div className="bg-white mb-16 rounded-3xl shadow-lg p-6 max-w-sm">
      <h2 className="text-[#091156] text-xl font-bold mb-6">Recent Posts</h2>
      <div className="space-y-4">
        {RECENT_POSTS.map((post) => (
          <div key={post.id} className="flex items-center space-x-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div>
              <p className="text-[#FF64AE] text-sm font-semibold">{post.date}</p>
              <h3 className="text-[#8B8B8B] text-sm mt-1">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;