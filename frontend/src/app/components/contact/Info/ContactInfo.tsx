import React from 'react';
import Image from 'next/image';
import { CONTACT_INFO } from '@/app/data';

// Interfaces
interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  description: string;
}

interface ContactCardProps {
  info: ContactInfo;
}

// ContactCard component
const ContactCard: React.FC<ContactCardProps> = ({ info }) => (
  <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg p-6">
    <div className="flex flex-col items-center text-center">
      <Image
        src={info.icon}
        alt={info.title}
        width={64}
        height={64}
        className="mb-4"
      />
      <h3 className="text-[#FF64AE] text-sm font-semibold mb-2">{info.title}</h3>
      <p className="text-[#091156] text-xl font-bold mb-2">{info.value}</p>
      <p className="text-[#8B8B8B] text-sm">{info.description}</p>
    </div>
  </div>
);

// Main ContactInfo component
const ContactInfo: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {CONTACT_INFO.map((info, index) => (
      <ContactCard key={index} info={info} />
    ))}
  </div>
);

export default ContactInfo;