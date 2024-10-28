import React from 'react';
import Image from 'next/image';
import ThumbnailTitle from '@/public/assets/Tittle.svg'

const Title: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw]">
      <div className="relative">
        <Image
          src={ThumbnailTitle}
          alt="titleBackground"
          layout="responsive"
          width={1441}
          height={285}
          className="object-cover min-h-[200px]"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>
      
      <div className="absolute inset-0">
        {/* Content container with flex layout */}
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[69px] flex items-center">
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 ">
            {/* Left side - Blog title */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FFFFFF]">
              Blog
            </div>
            
            {/* Right side - Navigation */}
            <div className="text-base font-medium tracking-widest text-[#D9D9D9]">
              Home • Blog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;