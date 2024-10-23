import React from 'react';
import Image from 'next/image';
import ThumbnailSlogan from '@/public/assets/ThumbnailSlogan.svg'

const BusinessSlogan: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw]">
      <div className="relative">
        <Image
          src={ThumbnailSlogan}
          alt="thumbnailBusinessSlogan"
          layout="responsive"
          width={1440}
          height={529}
          className="object-cover min-h-[400px]"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-sm sm:text-base mt-10 sm:mt-7 md:mt-5 lg:mt-11 xl:-mt-3 font-semibold text-[#ABB4FF]">
          Business Slogan
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-[13px] text-center font-semibold text-[#FFFFFF] max-w-3xl">
          <span className="block">Best responsibility and service</span> 
          <span className="block mt-1 sm:mt-2 md:mt-[5px]">for our customers</span>
        </div>
        <div className="text-sm sm:text-base mt-4 sm:mt-5 md:mt-[22px] font-light tracking-widest text-center text-[#CACACA] max-w-2xl px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
          <br className="hidden sm:block" /> purus sit amet luctus venenatis
        </div>
      </div> 
    </div>
  );
};

export default BusinessSlogan;