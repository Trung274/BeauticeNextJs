import React from 'react';
import Image from 'next/image';
import PinkButton0 from '../../common/Buttons/PinkButton1';

interface BlogArticle {
    image: string;
    category: string;
    title: string;
    description: string;
}

interface BlogArticleProps {
    article: BlogArticle;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ article }) => (
    <div className="w-full h-full bg-white rounded-[50px] overflow-hidden shadow-lg flex flex-col xl:max-w-[730px] mb-[61px] mt-[2px]">
        <div className="w-full h-80 xl:h-[453px] relative">
            <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="p-8 xl:ml-11 xl:mt-7 flex-grow">
            <div className="mb-5 mt-[1px] flex flex-row">
                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6562 3.25H13.2812L10.1562 0.125H2.34375C1.04932 0.125 0 1.17432 0 2.46875V16.5312C0 17.8257 1.04932 18.875 2.34375 18.875H22.6562C23.9507 18.875 25 17.8257 25 16.5312V5.59375C25 4.29932 23.9507 3.25 22.6562 3.25Z" fill="#FF64AE" />
                </svg>
                <span className="text-base font-semibold text-[#FF64AE] ml-4 -mt-[3px] ">
                    {article.category}
                </span>
            </div>
            <div className="text-3xl sm:text-4xl font-semibold max-w-xl text-[#091156]">{article.title}</div>
            <p className="text-base font-light mt-[30px] tracking-widest xl:max-w-xl xl:ml-[1px] text-[#8B8B8B] mb-[35px]">{article.description}</p>
            <a href="/read-more" className='px-10 xl:pl-14 py-2.5 border-2 border-[#ff64ae] bg-[#ff64ae] text-white font-semibold text-base tracking-widest rounded-full h-[59px] w-[228px] inline-flex items-center justify-center whitespace-nowrap transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ff64ae]'>
            Read More {' '}
                <svg className='ml-2' width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.8125 13.7823V1.21764C0.8125 0.347624 1.8644 -0.0880693 2.47959 0.527116L8.76191 6.80944C9.14326 7.19079 9.14326 7.80915 8.76191 8.1905L2.47959 14.4728C1.8644 15.0881 0.8125 14.6523 0.8125 13.7823Z" fill="white" />
                </svg>
            </a>
        </div>
    </div>
);

export default BlogArticle;