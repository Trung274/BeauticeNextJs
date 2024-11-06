'use client'

import React, { useState } from 'react';
import ProfessionalCard, { Professional } from './ProfessionalCard';
import DermatologistSVG from '@/public/assets/DermatologistAvatar.svg';
import StylistSVG from '@/public/assets/StylelistAvatar.svg';
import SurgeonSVG from '@/public/assets/SurgeonAvatar.svg';
import { Section, ResponsiveGrid, SectionTitle, MainHeading, SubHeading } from '@/styles/common.styles';
import tw from 'twin.macro';

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
    <Section css={tw`mt-[68px]`}>
      <div className="flex flex-col mb-16">
        <SectionTitle css={tw`mt-2 ml-[6px] font-semibold text-sm tracking-widest`}>Professional Teams</SectionTitle>
        <MainHeading css={tw`mt-3`}>The Professional expert</MainHeading>
        <SubHeading css={tw`mt-5 max-w-4xl mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </SubHeading>
      </div>
      <ResponsiveGrid
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
      </ResponsiveGrid>
    </Section>
  );
};

export default ProfessionalTeams;