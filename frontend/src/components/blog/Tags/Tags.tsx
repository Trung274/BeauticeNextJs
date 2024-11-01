import React from 'react';
import { TAGS } from '@/app/data';

const Tags: React.FC = () => {
  return (
    <div className="bg-white mt-8 xl:mt-28 p-4 xl:p-6 mb-8 xl:mb-16 rounded-[25px] shadow-md max-w-[350px] xl:mr-[10px] mx-auto">
      <h2 className="text-base ml-2 xl:ml-6 mt-2 xl:mt-[6px] font-bold text-[#091156] mb-4">Cloud Tags</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 xl:gap-x-5 gap-y-[16px] ml-2 xl:ml-[27px] mt-2 xl:mt-5 max-w-[250px] mb-8">
        {TAGS.map((tag, index) => (
          <div 
            key={index} 
            className="bg-gray-100 py-1 rounded-3xl text-center text-[#8B8B8B] tracking-widest text-xs xl:text-sm"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;