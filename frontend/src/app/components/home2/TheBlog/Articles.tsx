import React from 'react';
import Image from 'next/image';
import PinkButton from '../../common/Buttons/PinkButton';
import pic1 from '@/public/assets/pic1.svg'
import pic2 from '@/public/assets/pic2.svg'
import pic3 from '@/public/assets/pic3.svg'

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

// Constants
const ARTICLES: Article[] = [
  {
    image: pic1,
    category: 'Consultation',
    title: 'How much does a consultation cost at our clinic?',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    image: pic2,
    category: 'Beauty',
    title: 'Watch out! don\'t choose the wrong beauty product',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    image: pic3,
    category: 'Treatments',
    title: 'About skin care you need to know',
    description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
];

// ArticleCard component
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
    <Image
      src={article.image}
      alt={article.title}
      width={384}
      height={240}
      className="w-full h-60 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-[#091156] mb-2">{article.title}</h2>
      <p className="text-[#8B8B8B] text-sm mb-4">{article.description}</p>
      <div className="flex items-center justify-between">
        <button className="text-[#FF64AE] font-semibold text-sm flex items-center">
          Read more
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00938 6.06416L2.75938 10.5798C2.46563 10.8919 1.99063 10.8919 1.7 10.5798L0.99375 9.82939C0.7 9.51728 0.7 9.0126 0.99375 8.70381L4.00625 5.50303L0.99375 2.30225C0.7 1.99014 0.7 1.48545 0.99375 1.17666L1.69687 0.419629C1.99062 0.10752 2.46562 0.10752 2.75625 0.419629L7.00625 4.93525C7.30312 5.24736 7.30312 5.75205 7.00938 6.06416ZM13.0094 4.93525L8.75937 0.419629C8.46562 0.10752 7.99062 0.10752 7.7 0.419629L6.99375 1.17002C6.7 1.48213 6.7 1.98682 6.99375 2.29561L10.0063 5.49639L6.99375 8.69717C6.7 9.00928 6.7 9.51396 6.99375 9.82275L7.7 10.5731C7.99375 10.8853 8.46875 10.8853 8.75937 10.5731L13.0094 6.05752C13.3031 5.75205 13.3031 5.24736 13.0094 4.93525Z" fill="#FF64AE" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// Main ArticlePost component
const ArticlePost: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {ARTICLES.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </div>
);

export default ArticlePost;