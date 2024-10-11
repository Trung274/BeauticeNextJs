import PinkButton from '../../common/Buttons/PinkButton'
import AnimationSlider from '@/public/assets/AnimationSlider'
import SliderButton from './SliderButton'

const MainSlider: React.FC = () => (
  <div className="flex flex-col justify-center pt-7">
    <div className="flex flex-row max-md:flex-col">
      <div className="w-1/2 grid grid-rows-[auto_auto_auto_1fr] gap-y-4 pl-15">
        <div className="text-5xl pt-16 leading-tight text-[#091156] font-semibold">
          Clinic & beauty <br /> consultant
        </div>
        <div className="text-base tracking-widest text-[#091156] font-semibold -mt-2">
          It is a long established fact that a reader will be <br /> by the
          readable content of a page.
        </div>
        <div className='pt-[18px]'>
          <PinkButton href='#'>More Details</PinkButton>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:justify-end items-center pt-8 md:-ml-9 md:pt-2'> 
        <div className="w-full md:w-full h-full transform origin-center scale-50 md:scale-100">
          <AnimationSlider />
        </div>
      </div>
    </div>

    <div className='pt-16 md:pt-[135px]'>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider