import React from 'react';
import Image from 'next/image';
import PlayButtonSVG from '@/public/assets/PlayButton3.svg';
import ThumbnailSlogan from '@/public/assets/ThumbnailGallery.svg';

const VideoTour: React.FC = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
      <div className="flex flex-col items-center">
        <Image
          src={ThumbnailSlogan}
          alt="thumbnailBusinessSlogan"
          layout="responsive"
          width={1440}
          height={529}
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-60" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-2">
        <h2 className="text-3xl text-center font-semibold text-[#FFFFFF]">
          Watch the video tour
        </h2>
        <p className="text-base font-light text-center text-[#CACACA]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br /> aliquam, purus sit amet luctus venenatis
        </p>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <a href="#">
            <Image
              src={PlayButtonSVG}
              alt="Treatments Videos"
              width={127}
              height={127}
              className="transition-transform duration-300 group-hover:scale-110 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoTour;