import React from 'react';
import Image from 'next/image';
import FacebookIcon from '../../common/Icons/Facebook';
import TwitterIcon from '../../common/Icons/Twitter';
import InstagramIcon from '../../common/Icons/Instagram';

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

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional, isAnyHovered }) => {
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

  const getShadowClass = () => {
    if (professional.position === 'center' && !isAnyHovered) {
      return 'shadow-[0_25px_50px_25px_rgba(246,247,255,1)]';
    }
    return 'hover:shadow-[0_25px_50px_25px_rgba(246,247,255,1)]';
  };

  return (
    <div className="w-full">
      <div className={`relative w-full max-w-[424px] mx-auto h-[626px] bg-white rounded-[42px] transition-shadow duration-300 ${getShadowClass()}`}>
        <Image
          src={professional.avatarSrc}
          alt={professional.role}
          width={146}
          height={146}
          className={`absolute top-[95px] left-1/2 transform -translate-x-1/2 ${getAvatarPositionClass()}`}
        />
        <div className={`absolute top-[292px] left-0 right-0 text-center ${getContentPositionClass()}`}>
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