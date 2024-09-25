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
  <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg p-4 h-96">
    <div className="flex flex-col items-center text-center h-full">
      <Image
        src={service.icon}
        alt={service.title}
        width={200}
        height={200}
        className="mb-4"
      />
      <h3 className="text-[#091156] text-xl font-bold mt-12 mb-2">{service.title}</h3>
      <p className="text-[#8B8B8B] text-sm mt-4">{service.description}</p>
    </div>
  </div>
);

// Main Services component
const Services: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {SERVICES.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
);

export default Services;