'use client'

import React from 'react';
import Image from 'next/image';
import WhyBackgroundSVG from '@/public/assets/WhyBackground.svg';
import TrustedClinicSVG from '@/public/assets/TrustedClinic.svg';
import CustomerLoveSVG from '@/public/assets/CustomerLove.svg';
import AsianBranchSVG from '@/public/assets/AsianBranch.svg';
import LicensedWorkerSVG from '@/public/assets/LicensedWorker.svg';

const StatItem: React.FC<{ svg: string; alt: string }> = ({ svg, alt }) => (
  <div className="w-[215px] p-2"> 
    <Image src={svg} alt={alt} width={150} height={80} layout="responsive" /> 
  </div>
);

const Why: React.FC = () => (
  <>
    <img 
      src={WhyBackgroundSVG.src} 
      alt="" 
      className="absolute left-0 right-0 w-full h-[12%] xl:h-auto object-cover -mt-[33px] -z-10" 
    />
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col mt-[195px] md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl ml-[26px] font-semibold text-white mb-[23px]">
            Why choosing us?
          </h2>
          <p className="text-base font-light ml-[26px] text-white tracking-widest">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center -ml-[57px] -mt-6 md:justify-end gap-x-[56px] gap-y-[22px]">
          <StatItem svg={TrustedClinicSVG} alt="100% trusted clinic" />
          <StatItem svg={CustomerLoveSVG} alt="99% customer love" />
          <StatItem svg={AsianBranchSVG} alt="75+ asian branch" />
          <StatItem svg={LicensedWorkerSVG} alt="1,200+ licensed worker" />
        </div>
      </div>
    </div>
  </>
);

export default Why;