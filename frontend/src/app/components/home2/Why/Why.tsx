'use client'

import React from 'react';
import Image from 'next/image';
import WhyBackgroundSVG from '@/public/assets/WhyBackground.svg';
import TrustedClinicSVG from '@/public/assets/TrustedClinic.svg';
import CustomerLoveSVG from '@/public/assets/CustomerLove.svg';
import AsianBranchSVG from '@/public/assets/AsianBranch.svg';
import LicensedWorkerSVG from '@/public/assets/LicensedWorker.svg';

const StatItem: React.FC<{ svg: string; alt: string }> = ({ svg, alt }) => (
  <div className="w-1/2 p-2">
    <Image src={svg} alt={alt} width={150} height={80} layout="responsive" />
  </div>
);

const Why: React.FC = () => (
  <div className="relative w-screen left-1/2 right-1/2 mx-[-50vw]">
    <Image
      src={WhyBackgroundSVG}
      alt="Background"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
    <div className="relative z-10 container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Why choosing us?
          </h2>
          <p className="text-base font-light text-white tracking-wider">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center md:justify-end">
          <StatItem svg={TrustedClinicSVG} alt="100% trusted clinic" />
          <StatItem svg={CustomerLoveSVG} alt="99% customer love" />
          <StatItem svg={AsianBranchSVG} alt="75+ asian branch" />
          <StatItem svg={LicensedWorkerSVG} alt="1,200+ licensed worker" />
        </div>
      </div>
    </div>
  </div>
);

export default Why;