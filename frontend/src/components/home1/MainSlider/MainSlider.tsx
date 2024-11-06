'use client'

import PinkButton from '@/components/common/Buttons/PinkButton'
import AnimationSlider from '@/public/assets/AnimationSlider'
import SliderButton from './SliderButton'
import { FlexContainer, MainHeading, SubHeading } from '@/styles/common.styles'
import tw from 'twin.macro'

const MainSlider: React.FC = () => (
  <FlexContainer css={tw`pt-7`}>
    <div className="flex flex-row max-xl:flex-col max-xl:items-center">
      <div className="w-1/2 max-xl:w-full grid grid-rows-[auto_auto_auto_1fr] gap-y-4 pl-15 max-xl:pl-4 max-xl:pr-4 max-xl:text-center xl:pt-2">
        <MainHeading css={tw`text-5xl pt-16`}>
        <span className="block">Clinic & beauty</span>
        <span className="block mt-[12px]">consultant</span>
        </MainHeading>
        <SubHeading css={tw`font-semibold -mt-1`}>
          It is a long established fact that a reader will be <br className="max-xl:hidden" /> by the
          readable content of a page.
        </SubHeading>
        <div className='pt-[18px] max-xl:flex max-xl:justify-center'>
          <PinkButton href='#'>More Details</PinkButton>
        </div>
      </div>
      <div className='w-full xl:w-1/2 flex justify-items-center justify-center xl:justify-end items-center pt-8 xl:-ml-9 xl:pt-2'> 
        <div className="w-full md:w-full h-full transform origin-center scale-75 md:scale-100 max-xl:flex max-xl:justify-center">
          <AnimationSlider />
        </div>
      </div>
    </div>

    <div className='pt-[135px] max-xl:pt-12'>
      <SliderButton />
    </div>
  </FlexContainer>
)

export default MainSlider