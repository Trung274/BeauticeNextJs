import React from 'react';
import { TAGS } from '@/app/data';

const Tags: React.FC = () => {

  return (
    <div className="bg-white p-6 mb-16 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-[#091156] mb-4">Cloud Tags</h2>
      <div className="grid grid-cols-3 gap-4">
        {TAGS.map((tag, index) => (
          <div 
            key={index} 
            className="bg-gray-100 px-3 py-2 rounded-3xl text-center text-[#8B8B8B] text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;