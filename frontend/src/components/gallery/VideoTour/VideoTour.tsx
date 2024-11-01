import React from 'react';
import Image from 'next/image';
import PlayButtonSVG from '@/public/assets/PlayButton3.svg';
import ThumbnailSlogan from '@/public/assets/ThumbnailGallery.svg';

const VideoTour: React.FC = () => {
  return (
    <div className="relative w-screen -mt-[3px] left-1/2 right-1/2 mx-[-50vw]">
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
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:mt-[41px] font-semibold text-[#FFFFFF]">
            Watch the video tour
          </h2>
          <p className="text-sm sm:text-base mt-4 sm:mt-5 md:mt-[22px] font-light tracking-widest text-[#CACACA] max-w-2xl md:max-w-3xl lg:max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut 
            aliquam, purus sit amet luctus venenatis
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a href="#" className="group inline-block relative w-32 h-32 sm:w-40 sm:h-40">
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

export default VideoTour;