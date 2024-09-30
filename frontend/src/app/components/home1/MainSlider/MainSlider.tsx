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
        <div className='pt-4'>
          <PinkButton href='#'>More Details</PinkButton>
        </div>
      </div>
      <div className='pr-6 pt-2'> 
        <AnimationSlider />
      </div>
    </div>

    <div className='pt-32'>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider