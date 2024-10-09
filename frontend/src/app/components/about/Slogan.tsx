import React from 'react';
import Image from 'next/image';
import ThumbnailSlogan from '@/public/assets/ThumbnailSlogan.svg'
const BusinessSlogan: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] left-1/2 right-1/2 mx-[-50vw]">
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
      <div className="absolute inset-0 gap-y-4 -mt-4 ">
        <div className="text-base mt-[178px] flex flex-col items-center justify-center font-semibold text-[#ABB4FF]">
          Business Slogan
        </div>
        <div className="text-4xl mt-[13px] flex flex-col items-center justify-center text-center font-semibold text-[#FFFFFF]">
        <span className="block">Best responsibility and service</span> 
        <span className="block mt-[5px]">for our customers</span>
            </div>
            <div className="text-base -ml-1 mt-[22px] flex flex-col items-center justify-center font-light tracking-widest text-center text-[#CACACA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis
            </div>
      </div> 
    </div>
  );
};

export default BusinessSlogan;