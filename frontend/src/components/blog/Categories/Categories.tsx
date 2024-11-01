import React from 'react';
import { CATEGORIES } from '@/app/data';

const Categories = () => {
  return (
    <div className="bg-white rounded-[25px] py-8 xl:py-16 shadow-lg p-4 xl:p-5 max-w-[350px] mx-auto">
      <h2 className="text-[#091156] text-base ml-2 xl:ml-6 mt-2 xl:mt-3 font-semibold mb-4 xl:mb-[18px]">Categories</h2>
      <ul className="space-y-[2px] ml-2 xl:ml-6 -mb-4">
        {CATEGORIES.map((category, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-[#8B8B8B] hover:text-[#091156] transition-colors duration-300"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;