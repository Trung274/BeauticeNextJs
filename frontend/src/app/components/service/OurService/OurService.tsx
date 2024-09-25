import React from 'react';
import Image from 'next/image';
import ServiceImg1 from '@/public/assets/ServiceImg1.svg'
import ServiceImg2 from '@/public/assets/ServiceImg2.svg'
import ServiceImg3 from '@/public/assets/ServiceImg3.svg'
import ServiceImg4 from '@/public/assets/ServiceImg4.svg'

const OurService: React.FC = () => (
  <div className="flex flex-col gap-8">
    {/* Title */}
    <div className="flex flex-col flex-wrap gap-3 justify-center text-center">
      <div className="text-xs font-semibold text-[#FF64AE]">Our Services</div>
      <div className="text-3xl text-[#091156] font-semibold">We focus on your beauty</div>
      <div className='text-base font-light text-[#8B8B8B]'>Lorem ipsum dolor sit amet</div>
    </div>
    {/* Images */}
    <div className="flex flex-col gap-32">
      <div className="flex flex-wrap gap-32 justify-center">
        <div className="hidden md:block">
          <Image src={ServiceImg1} alt="SquareImg1" width={300} height={300} />
        </div>
        <Image src={ServiceImg2} alt="LongImg1" width={600} height={300} />
      </div>
      <div className="flex flex-wrap gap-32 justify-center">
        <Image src={ServiceImg3} alt="LongImg2" width={600} height={300} />
        <Image src={ServiceImg4} alt="SquareImg2" width={300} height={300} />
      </div>
    </div>
  </div>
);

export default OurService;