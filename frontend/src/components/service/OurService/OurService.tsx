import React from 'react';
import Image from 'next/image';
import ServiceImg1 from '@/public/assets/ServiceImg1.svg'
import ServiceImg2 from '@/public/assets/ServiceImg2.svg'
import ServiceImg3 from '@/public/assets/ServiceImg3.svg'
import ServiceImg4 from '@/public/assets/ServiceImg4.svg'

const OurService: React.FC = () => (
  <div className="flex mt-9 flex-col gap-8">
    {/* Title */}
    <div className="flex flex-col flex-wrap gap-3 justify-center text-center">
      <div className="text-base font-semibold text-[#FF64AE]">Our Services</div>
      <div className="text-4xl text-[#091156] font-semibold">We focus on your beauty</div>
      <div className='text-base tracking-widest mt-4 font-light text-[#8B8B8B]'>Lorem ipsum dolor sit amet</div>
    </div>
    {/* Images */}
    <div className="flex flex-col mt-10 gap-32">
      <div className="flex flex-wrap gap-20 justify-center">
        <div className="hidden md:block">
          <Image src={ServiceImg1} alt="SquareImg1" width={292} height={292} />
        </div>
        <Image src={ServiceImg2} alt="LongImg1" width={725} height={410} />
      </div>
      <div className="flex flex-wrap xl:-mt-15 gap-[90px] justify-center">
        <Image src={ServiceImg3} alt="LongImg2" width={720} height={296} />
        <Image src={ServiceImg4} alt="SquareImg2" width={290} height={290} />
      </div>
    </div>
  </div>
);

export default OurService;