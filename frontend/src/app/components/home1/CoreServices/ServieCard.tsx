import React from 'react';
import Image from 'next/image';
import { SERVICES } from '@/app/data';

// Interfaces
interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

// ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-6 w-[343px] h-[489px]">
    <div className="flex flex-col pt-24 items-center text-center h-full">
      <Image
        src={service.icon}
        alt={service.title}
        width={160}
        height={160}
        className="mb-6"
      />
      <h3 className="text-[#091156] text-base font-bold tracking-wider mt-16 mb-3">{service.title}</h3>
      <p className="text-[#8B8B8B] tracking-wide text-sm mt-3 px-4">{service.description}</p>
    </div>
  </div>
);

// Main Services component
const Services: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
    {SERVICES.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
);

export default Services;