import React from 'react';
import Image from 'next/image';
import ThumbnailSlogan from '@/public/assets/TeamSlogan.svg'
const TeamSlogan: React.FC = () => {
  return (
    <div className="container relative mx-auto">
      <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
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
        <div className="text-3xl text-center font-semibold text-[#FFFFFF]">
        Customer satisfaction is <br />
        our main goal
            </div>
            <div className="text-base font-light text-center text-[#CACACA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis
            </div>
      </div>
    </div>
  );
};

export default TeamSlogan;