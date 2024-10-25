import React from 'react';
import Image from 'next/image';
import PlayButtonSVG from '@/public/assets/PlayButton2.svg';
import ThumbnailSlogan from '@/public/assets/ThumbnailService.svg'

const ServiceSlogan: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw]">
      <div className="relative">
        <Image
          src={ThumbnailSlogan}
          alt="thumbnailServiceSlogan"
          layout="responsive"
          width={1440}
          height={529}
          className="object-cover min-h-[400px]"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Left content */}
          <div className="flex flex-col xl:ml-[38px] xl:-mt-4 max-w-xl">
            <div className="text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-[13px] font-semibold text-[#FFFFFF]">
              <span className="block">Best responsibility and service</span> 
              <span className="block mt-1 sm:mt-2 md:mt-[5px]">for our customers</span>
            </div>
            <div className="text-sm sm:text-base mt-4 sm:mt-5 md:mt-[22px] xl:ml-[2px] font-light tracking-widest text-[#CACACA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </div>
          </div>

          {/* Right play button */}
          <div className="flex flex-col xl:ml-12 items-center justify-center w-1/2">
            <a href="#" className="group inline-block relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[354px] lg:h-[165px]">
              <Image
                src={PlayButtonSVG}
                alt="Play Video"
                fill
                className="transition-transform duration-300 group-hover:scale-110 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlogan;