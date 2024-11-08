'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogArticle from './BlogArticle';
import { RootState } from '@/app/store';
import { setCurrentPage } from '@/app/blogSlice';

const ITEMS_PER_PAGE = 3;

const Article: React.FC = () => {
  const dispatch = useDispatch();
  const { articles, currentPage, totalPages } = useSelector((state: RootState) => state.blog);

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber));

  return (
    <div className="flex flex-col space-y-[127px] mt-6 xl:ml-[5px] h-full">
      {currentArticles.map((article, index) => (
        <div key={index} className="h-full">
          <BlogArticle article={article} />
        </div>
      ))}
      <div className="flex justify-center xl:justify-end space-x-5 mr-[152px]">
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      </div>
    </div>
  );
};

const Pagination: React.FC<{ currentPage: number; totalPages: number; paginate: (pageNumber: number) => void }> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  return (
    <div className="flex space-x-5 -mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-3 py-1 rounded ${
            currentPage === number ? 'bg-[#172176] text-white rounded-full' : 'rounded-full'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Article;