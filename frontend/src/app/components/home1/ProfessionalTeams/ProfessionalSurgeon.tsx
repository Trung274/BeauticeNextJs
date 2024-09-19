import React from 'react'
import Image from 'next/image'
import SurgeonSVG from '@/public/assets/SurgeonAvatar.svg'
import FacebookIcon from '../../common/Icons/Facebook'
import TwitterIcon from '../../common/Icons/Twitter'
import InstagramIcon from '../../common/Icons/Instagram'

const SurgeonProfessional: React.FC = () => (
  <div className="flex">
    <div className="flex flex-none max-w-[424px] flex-col gap-y-3 justify-center text-center place-content-center bg-white w-[424px] h-[626px] rounded-[42px] drop-shadow-[0px_25px_50px_rgba(246,247,255,1)]">
      <div className="mx-auto">
      <Image
          src={SurgeonSVG}
          alt="Surgeon"
          width={146}
          height={146}
          className="align-content-center justify-items-center justify-center place-content-center"
        />
      </div>
      <div className="flex-col mt-6">
        <div className='text-base font-semibold text-[#FF64AE]'>
          Surgeon
        </div>

        <div className="text-xl font-semibold mt-3">
          Briyan Nevalli
        </div>

        <div className="text-base font-light mt-3 tracking-wide text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit ut <br /> aliquam, purus sit
        </div>
      </div>
      <div className="flex flex-row gap-x-2 justify-center">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      </div>
    </div>
)
export default SurgeonProfessional