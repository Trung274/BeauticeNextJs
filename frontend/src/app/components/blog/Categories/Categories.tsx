import React from 'react';
import { CATEGORIES } from '@/app/data';

const Categories = () => {
  return (
    <div className="bg-white rounded-3xl mb-16 shadow-lg p-6 max-w-sm">
      <h2 className="text-[#091156] text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
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