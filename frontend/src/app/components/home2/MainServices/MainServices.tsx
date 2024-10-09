import React from 'react';
import { SERVICES2 } from '@/app/data';
import ServiceCard from './ServiceCard';

const MainServices: React.FC = () => (
  <div className="flex flex-col justify-center mt-3 gap-y-6 text-center">
    <div className="flex flex-col gap-y-[13px]">
      <div className="text-base font-semibold text-[#FF64AE]">Main Services</div>
      <div className="text-4xl mb-[9px] text-[#091156] font-semibold">
        Our focus services
      </div>
      <div className="text-base tracking-widest font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
    <div className="flex flex-wrap justify-center mt-[22px] gap-x-[66px] p-8">
      {SERVICES2.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
);

export default MainServices;