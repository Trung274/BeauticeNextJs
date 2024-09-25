import React from 'react';
import Image from 'next/image';
import ThumbnailTitle from '@/public/assets/Tittle.svg'

const Title: React.FC = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={ThumbnailTitle}
          alt="Service Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
            <div className="text-2xl text-[#ffffff] md:text-4xl lg:text-3xl font-semibold mb-4">
            Blog
            </div>
          </div>

          {/* Right Content */}
          <div className='font-medium text-base text-[#D9D9D9]'>
          Home	• Blog
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;