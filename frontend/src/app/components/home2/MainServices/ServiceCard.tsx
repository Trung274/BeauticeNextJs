import React from 'react';
import Image from 'next/image';
import CarretRight2 from '@/public/assets/CarretRight2.svg'

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-[25px] p-6 flex flex-col items-start text-start w-[261px] h-[303px] border border-[#E2E2E2] hover:border-[#9BA2E0] active:border-[#9BA2E0] transition-colors duration-200">
    <div className="mb-4 ml-3 mt-[6px]">
      <Image src={icon} alt={title} width={64} height={64} />
    </div>
    <h3 className="text-xl tracking-tighter font-semibold text-[#091156] ml-[11px] mt-[6px]">{title}</h3>
    <p className="text-sm ml-3 leading-[21px] tracking-widest mt-[12px] text-gray-500 mb-4">{description}</p>
    <a href="#" className="text-[#FF64AE] text-sm font-medium hover:underline ml-3 flex items-center gap-1">
      Learn more <Image src={CarretRight2} alt="arrow" width={15} height={15} className='ml-[7px]'/>
    </a>
  </div>
);

export default ServiceCard;