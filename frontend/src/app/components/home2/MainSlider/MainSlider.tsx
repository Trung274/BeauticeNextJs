'use client'

import React from 'react'
import Image from 'next/image'
import WhiteButton from '../../common/Buttons/WhiteButton'
import BgSliderSVG from '@/public/assets/BgSlider.svg'
import PlayButtonSVG from '@/public/assets/PlayButton.svg'

const MainSlider: React.FC = () => (
  <div className="relative w-full min-h-screen">
    {/* Content */}
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen p-4 md:p-8">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Your beauty center <br /> place
        </h1>
        <p className="text-sm md:text-base mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Commodo, massa pellentesque arcu fusce et
          magna consequat neque vitae lobortis.
        </p>
        <WhiteButton href='#'>More Details</WhiteButton>
      </div>

      {/* Right Content - Tour Video */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <a href="#" className="group w-1/2 md:w-2/5 aspect-square relative">
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
)

export default MainSlider