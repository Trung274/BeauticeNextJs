import React from 'react';
import Image from 'next/image';
import { SERVICES2 } from '@/app/data';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start text-start max-w-xs">
    <div className="mb-4">
      <Image src={icon} alt={title} width={64} height={64} />
    </div>
    <h3 className="text-xl font-semibold text-[#091156] mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <a href="#" className="text-[#FF64AE] text-sm font-medium hover:underline">
      Learn more »
    </a>
  </div>
);

const MainServices: React.FC = () => (
  <div className="flex flex-col justify-center gap-y-6 text-center">
    <div className="flex flex-col gap-y-5">
      <div className="text-xs font-semibold text-[#FF64AE]">Main Services</div>
      <div className="text-3xl text-[#091156] font-semibold">
        Learn services to focus <br /> on your beauty
      </div>
      <div className="text-base font-light text-[#8B8B8B]">
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
        Non parturient <br /> amet, feugiat tellus sagittis, scelerisque eget
        nulla turpis.
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 p-8">
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