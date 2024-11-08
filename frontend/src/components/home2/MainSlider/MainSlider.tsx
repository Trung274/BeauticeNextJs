'use client'

import React from 'react'
import Image from 'next/image'
import WhiteButton from '@/components/common/Buttons/WhiteButton'
import BgSliderSVG from '@/public/assets/BgSlider.svg'
import PlayButtonSVG from '@/public/assets/PlayButton.svg'
import BgSlider from './BgSlider'

const MainSlider: React.FC = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
      <div className="w-full h-full md:min-w-[768px] lg:min-w-[1440px] min-h-[500px] md:min-h-[700px] lg:min-h-[918px]">
        <BgSlider className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="flex flex-col justify-center pt-4">
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 pt-[90px]">
        {/* Left Content */}
        <div className="ml-[38px] text-white mb-8 md:mb-0">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            <span className="block">Your beauty center</span>
            <span className="block mt-[12px]">place</span>
          </div>
          <p className="text-sm tracking-widest md:text-base mb-6 mt-5 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Commodo, massa pellentesque arcu fusce et <br />
            magna consequat neque vitae lobortis. <br />
          </p>
          <div className='flex mt-10'>
            <WhiteButton href='#'>More Details</WhiteButton>
          </div>
        </div>

        {/* Right Content - Tour Video */}
        <div className="w-full flex justify-center items-center -ml-[27px] -mt-[10px]">
          <a href="#" className="group w-[58%] md:w-[48%] aspect-square relative">
            <Image
              src={PlayButtonSVG}
              alt="Tour Video"
              fill
              className="transition-transform duration-300 group-hover:scale-110 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  </>
)

export default MainSlider