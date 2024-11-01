import React from 'react';
import Image from 'next/image';
import ThumbnailSlogan from '@/public/assets/TeamSlogan.svg'

const TeamSlogan: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw]">
      <div className="relative">
        <Image
          src={ThumbnailSlogan}
          alt="thumbnailTeamSlogan"
          layout="responsive"
          width={1440}
          height={529}
          className="object-cover min-h-[400px]"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>
      
      {/* Main content wrapper - now with pointer-events-none to allow clicking through */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Upper content section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:-mt-[77px] md:ml-6 text-center font-semibold text-[#FFFFFF] max-w-3xl pointer-events-auto">
            <span className="block">Customer satisfaction is</span> 
            <span className="block mt-1 sm:mt-2 md:mt-[5px]">our main goal</span>
          </div>
        </div>

        {/* Lower content section */}
        <div className="absolute inset-x-0 top-[60%] sm:top-[65%] md:top-[70%] pointer-events-auto">
          <div className="text-sm sm:text-base font-light tracking-widest text-center text-[#CACACA] max-w-2xl mx-auto px-4 -mt-[92px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            <br className="hidden sm:block" /> purus sit amet luctus venenatis
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlogan;