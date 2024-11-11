import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@/components/common/Icons/Facebook';
import TwitterIcon from '@/components/common/Icons/Twitter';
import InstagramIcon from '@/components/common/Icons/Instagram';

export interface Professional {
  id: number;
  name: string;
  role: string;
  description: string;
  avatarSrc: string;
  position: 'left' | 'center' | 'right';
}

interface ProfessionalCardProps {
  professional: Professional;
  isAnyHovered: boolean;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => {
  const getAvatarPositionClass = () => {
    switch (professional.position) {
      case 'left':
        return 'xl:ml-12';
      case 'right':
        return 'xl:-ml-12';
      default:
        return '';
    }
  };

  const getContentPositionClass = () => {
    switch (professional.position) {
      case 'left':
        return 'xl:left-[99px]';
      case 'right':
        return 'xl:right-[99px]';
      default:
        return 'left-0 right-0';
    }
  };

  return (
    <div className="flex items-center justify-center xl:block">
      <div className={`relative w-[424px] h-[626px]`}>
        {/* White background card that appears on hover */}
        <div className={`
          absolute w-[424px] h-[626px] top-0 
          bg-white rounded-[42px] opacity-0 
          group-hover:opacity-100 group-hover:drop-shadow-[0_8px_30px_rgba(0,0,0,0.05)]
          transition-all duration-300 z-0
          ${professional.position === 'left' ? 'left-[49px]' : 
            professional.position === 'right' ? 'right-[49px]' : 
            'left-0'}
        `} />
        
        {/* Content */}
        <Image
          src={professional.avatarSrc}
          alt={professional.role}
          width={146}
          height={146}
          className={`absolute top-[95px] left-1/2 transform -translate-x-1/2 z-10 ${getAvatarPositionClass()}`}
        />
        <div className={`absolute top-[293px] left-0 right-0 text-center z-10 ${getContentPositionClass()}`}>
          <div className="text-base font-semibold text-[#FF64AE]">
            {professional.role}
          </div>
          <div className="text-xl tracking-tighter font-semibold text-[#091156] mt-2">
            {professional.name}
          </div>
          <div className="text-base font-light tracking-wide text-[#8B8B8B] leading-tight mt-5">
            {professional.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row mt-[43px] gap-x-1 justify-center">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;