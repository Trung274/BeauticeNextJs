import React from 'react';
import ProfessionalCard, { Professional } from './ProfessionalCard';
import DermatologistSVG from '@/public/assets/DermatologistAvatar.svg';
import StylistSVG from '@/public/assets/StylelistAvatar.svg';
import SurgeonSVG from '@/public/assets/SurgeonAvatar.svg';

const mockProfessionals: Professional[] = [
  {
    id: 1,
    name: "Lilly Adams",
    role: "Surgeon",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: SurgeonSVG
  },
  {
    id: 2,
    name: "Bella Sebastian",
    role: "Dermatologist",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: DermatologistSVG
  },
  {
    id: 3,
    name: "Briyan Nevalli",
    role: "Stylist",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit ut\naliquam, purus sit",
    avatarSrc: StylistSVG
  }
];

const ProfessionalTeams: React.FC = () => (
  <div className="flex flex-col justify-center space-y-12 text-center">
    <div className="flex flex-col mb-16">
      <div className="text-sm font-semibold tracking-widest text-[#FF64AE]">Professional Teams</div>
      <h2 className="text-3xl mt-4 sm:text-4xl font-semibold text-[#091156]">The Professional expert</h2>
      <p className="text-base tracking-widest font-light mt-5 text-[#8B8B8B] max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-8 justify-center items-center">
      {mockProfessionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  </div>
);

export default ProfessionalTeams;