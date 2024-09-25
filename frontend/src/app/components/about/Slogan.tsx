import React from 'react';
import Image from 'next/image';
import ThumbnailSlogan from '@/public/assets/ThumbnailSlogan.svg'
const BusinessSlogan: React.FC = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
      <div className="relative">
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
        <div className="text-xs font-semibold text-[#ABB4FF]">
          Business Slogan
        </div>
        <div className="text-3xl text-center font-semibold text-[#FFFFFF]">
                Best responsibility and service <br /> for our customers
            </div>
            <div className="text-base font-light text-center text-[#CACACA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis
            </div>
      </div>
    </div>
  );
};

export default BusinessSlogan;