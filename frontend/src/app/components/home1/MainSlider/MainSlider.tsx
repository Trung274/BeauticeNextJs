import PinkButton from '../../common/Buttons/PinkButton'
import AnimationSlider from '@/public/assets/AnimationSlider'
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
      <div className='w-full xl:w-1/2 flex justify-items-center justify-center xl:justify-end items-center pt-8 xl:-ml-9 xl:pt-2'> 
        <div className="w-full md:w-full h-full transform origin-center scale-75 md:scale-100 max-xl:flex max-xl:justify-center">
          <AnimationSlider />
        </div>
      </div>
    </div>

    <div className='pt-[135px] max-xl:pt-12'>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider