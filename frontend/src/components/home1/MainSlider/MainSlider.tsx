import PinkButton from '@/components/common/Buttons/PinkButton'
import Image from 'next/image'
import AnimationSlider from '@/public/assets/AnimationSlider.svg'
import SliderButton from './SliderButton'

const MainSlider: React.FC = () => (
  <div className="flex flex-col justify-center pt-7">
    <div className="flex flex-row max-xl:flex-col max-xl:items-center">
      <div className="w-1/2 max-xl:w-full grid grid-rows-[auto_auto_auto_1fr] gap-y-4 pl-15 max-xl:pl-4 max-xl:pr-4 max-xl:text-center">
        <div className="text-5xl pt-16 leading-tight text-[#091156] font-semibold">
          Clinic & beauty <br /> consultant
        </div>
        <div className="text-base tracking-widest text-[#091156] font-semibold -mt-2">
          It is a long established fact that a reader will be <br className="max-xl:hidden" /> by the
          readable content of a page.
        </div>
        <div className='pt-[18px] max-xl:flex max-xl:justify-center'>
          <PinkButton href='#'>More Details</PinkButton>
        </div>
      </div>
      <div className="flex max-md:w-full xl:-ml-9 mt-2 relative xl:right-0 max-xl:justify-center"> 
        <Image 
          src={AnimationSlider}
          alt="Slider animation"
          width={602}  
          height={398} 
          priority
        />
      </div>
    </div>

    <div className='pt-[135px] max-xl:pt-12'>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider