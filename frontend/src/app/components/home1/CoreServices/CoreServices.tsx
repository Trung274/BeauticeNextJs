import React from 'react';
import Services from './ServieCard';

const CoreServices: React.FC = () => (
  <div>
    <div className="flex flex-col justify-center gap-y-6 text-center">
      <div className="flex flex-col gap-y-5">
        <div className="text-xs font-semibold text-[#FF64AE]">Our Services</div>
        <div className="text-3xl text-[#091156] font-semibold">
          We are here to help you
        </div>
        <div className="text-base font-light text-[#8B8B8B]">
          Explore our range of professional beauty and wellness services
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        <Services />
      </div>
    </div>
  </div>
);

export default CoreServices;