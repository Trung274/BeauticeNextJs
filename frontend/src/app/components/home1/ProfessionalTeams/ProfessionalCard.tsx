// import React from 'react';
// import Image from 'next/image';
// import FacebookIcon from '../../common/Icons/Facebook';
// import TwitterIcon from '../../common/Icons/Twitter';
// import InstagramIcon from '../../common/Icons/Instagram';

// export interface Professional {
//   id: number;
//   name: string;
//   role: string;
//   description: string;
//   avatarSrc: string;
// }

// interface ProfessionalCardProps {
//   professional: Professional;
// }

// const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => (
//   <div className="flex">
//     <div className="flex flex-none max-w-[424px] flex-col gap-y-3 justify-center text-center place-content-center bg-white w-[424px] h-[626px] rounded-[42px] drop-shadow-[0px_25px_50px_rgba(246,247,255,1)]">
//       <div className="mx-auto">
//         <Image
//           src={professional.avatarSrc}
//           alt={professional.role}
//           width={146}
//           height={146}
//           className="align-content-center justify-items-center justify-center place-content-center"
//         />
//       </div>
//       <div className="flex-col mt-6">
//         <div className='text-base mt-3 font-semibold text-[#FF64AE]'>
//           {professional.role}
//         </div>

//         <div className="text-xl tracking-tight text-[#091156] font-semibold mt-3">
//           {professional.name}
//         </div>

//         <div className="text-base font-light mt-3 tracking-wide text-[#8B8B8B]">
//           {professional.description.split('\n').map((line, index) => (
//             <React.Fragment key={index}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-row gap-x-2 justify-center">
//         <TwitterIcon />
//         <FacebookIcon />
//         <InstagramIcon />
//       </div>
//     </div>
//   </div>
// );

// export default ProfessionalCard;

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
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => {
  const getAvatarPositionClass = () => {
    switch (professional.position) {
      case 'left':
        return 'ml-12';
      case 'right':
        return '-ml-12';
      default:
        return '';
    }
  };

  const getContentPositionClass = () => {
    switch (professional.position) {
      case 'left':
        return 'left-[99px]';
      case 'right':
        return 'right-[99px]';
      default:
        return 'left-0 right-0';
    }
  };

  const getShadowClass = () => {
    return professional.position === 'center' 
      ? 'drop-shadow-[0_8px_30px_rgba(0,0,0,0.05)]' 
      : '';
  };

  return (
    <div className="flex">
      <div className={`relative w-[424px] h-[626px] bg-white rounded-[42px] ${getShadowClass()}`}>
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
          <div className="text-base font-light tracking-wide text-[#8B8B8B] leading-tight mt-5 ">
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