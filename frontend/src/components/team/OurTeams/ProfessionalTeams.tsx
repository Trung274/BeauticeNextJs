import React from 'react';
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

const ProfessionalTeams: React.FC = () => (
  <section className="flex flex-col mt-[70px] justify-center space-y-7 text-center font-poppins">
    <div className="flex flex-col mb-16">
      <div className="text-base font-semibold mt-2 tracking-normal text-[#FF64AE] xl:mr-[79px] xl:mt-[10px]">Our Team</div>
      <h2 className="text-3xl mt-4 sm:text-4xl font-semibold text-[#091156] xl:mr-20 xl:mt-3">We are Professional</h2>
      <p className="text-base tracking-widest font-light mt-5 text-[#8B8B8B] max-w-4xl mx-auto xl:ml-[233px] xl:mt-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 justify-center items-center">
      {mockProfessionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  </section>
);

export default ProfessionalTeams;