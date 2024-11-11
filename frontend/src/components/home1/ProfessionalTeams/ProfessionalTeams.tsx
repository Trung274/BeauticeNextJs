'use client'

import React, { useState } from 'react';
import ProfessionalCard, { Professional } from './ProfessionalCard';
import DermatologistSVG from '@/public/assets/DermatologistAvatar.svg';
import StylistSVG from '@/public/assets/StylelistAvatar.svg';
import SurgeonSVG from '@/public/assets/SurgeonAvatar.svg';

const mockProfessionals: Professional[] = [
  {
    id: 1,
    name: "Briyan Nevalli",
    role: "Surgeon",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: SurgeonSVG,
    position: 'left'
  },
  {
    id: 2,
    name: "Bella sebastian",
    role: "Dermatologist",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: DermatologistSVG,
    position: 'center'
  },
  {
    id: 3,
    name: "Lilly Adams",
    role: "Stylist expert",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: StylistSVG,
    position: 'right'
  }
];

const ProfessionalTeams: React.FC = () => {
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  return (
    <section className="flex flex-col mt-[70px] justify-center space-y-12 text-center font-poppins">
      <div className="flex flex-col mb-16">
        <div className="text-sm font-semibold mt-2 tracking-widest text-[#FF64AE]">Professional Teams</div>
        <h2 className="text-3xl mt-4 sm:text-4xl font-semibold text-[#091156]">The Professional expert</h2>
        <p className="text-base tracking-widest font-light mt-5 text-[#8B8B8B] max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div 
        className="grid md:grid-cols-2 xl:grid-cols-3 xl:-ml-[75px] gap-4 xl:gap-[107px] items-center"
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {mockProfessionals.map((professional) => (
          <ProfessionalCard 
            key={professional.id} 
            professional={professional}
            isAnyHovered={isAnyHovered}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTeams;