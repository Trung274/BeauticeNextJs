import React from 'react';
import Image from 'next/image';
import { ARTICLES } from '@/app/data';
import CarretRight2 from '@/public/assets/CarretRight2.svg'

// Interfaces
interface Article {
  image: string;
  category: string;
  title: string;
  description: string;
}

interface ArticleCardProps {
  article: Article;
}

// ArticleCard component
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="w-full max-w-[347px] mx-auto h-[543px] bg-white rounded-[25px] overflow-hidden shadow-lg flex flex-col">
    <div className="h-[249px] relative">
      <Image
        src={article.image}
        alt={article.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex flex-col px-5 xl:ml-[38px] xl:px-0 pt-[57px]">
      <h2 className="text-lg text-start tracking-normal leading-[22px] font-bold text-[#091156] mb-2">{article.title}</h2>
      <p className="text-[#8B8B8B] mt-[6px] text-start tracking-widest text-sm mb-4 w-[274px]">{article.description}</p>
      <div className="flex items-center justify-between mt-3 -ml-3">
        <a href="#" className="text-[#FF64AE] font-semibold text-sm flex items-center hover:underline ml-3 gap-1">
          Learn more <Image src={CarretRight2} alt="arrow" width={15} height={15} className='ml-[7px]'/>
        </a>
      </div>
    </div>
  </div>
);

// Main ArticlePost component
const ArticlePost: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-12">
    {ARTICLES.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </div>
);

export default ArticlePost;