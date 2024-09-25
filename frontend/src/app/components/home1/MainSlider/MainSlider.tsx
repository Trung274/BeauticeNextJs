import PinkButton from '../../common/Buttons/PinkButton'
import AnimationSlider from '@/public/assets/AnimationSlider'
import SliderButton from './SliderButton'

const MainSlider: React.FC = () => (
  <div className="flex flex-col justify-center pt-8">
    <div className="flex flex-row max-md:flex-col ">
    <div className="w-1/2 grid grid-rows-3 pl-8">
        <div className="text-5xl text-[#091156] font-semibold">
          Clinic & beauty <br /> consultant
        </div>
        <div className="text-base text-[#091156] font-weight: 500">
          It is a long established fact that a reader will be <br /> by the
          readable content of a page.
        </div>
        <div>
          <PinkButton href='#'>More Details</PinkButton>
        </div>
      </div>
      <div>
        <AnimationSlider />
      </div>
    </div>

    <div>
      <SliderButton />
    </div>
  </div>
)

export default MainSlider