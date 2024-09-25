import React from 'react';
import Image from 'next/image';
import PlayButtonSVG from '@/public/assets/PlayButton2.svg';
import ThumbnailSlogan from '@/public/assets/ThumbnailService.svg'

const ServiceSlogan: React.FC = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
      {/* Full-width background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={ThumbnailSlogan}
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Best responsibility and service <br />
            for our customers
            </h1>
            <p className="text-sm md:text-base mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Commodo, massa pellentesque arcu fusce et
              magna consequat neque vitae lobortis.
            </p>
          </div>

          {/* Right Content - Treatments Videos */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <a href="#" className="group w-1/2 md:w-2/5 aspect-square relative">
              <Image
                src={PlayButtonSVG}
                alt="Treatments Videos"
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