import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'
import PinkButton from '../../common/Buttons/PinkButton'

const AboutUs = () => (
  <div className="flex flex-wrap w-full justify-between items-start">
    <div className="w-full md:w-[45%] mt-6 md:mt-0">
      <div className="max-w-sm mx-auto md:max-w-none">
        <Image
          src={ThumbnailAboutUs2SVG}
          alt=""
          width={490}
          height={302.67}
          layout="responsive"
        />
      </div>
    </div>
    <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
      <div className="flex flex-col gap-y-5">
        <div className="text-xs font-semibold text-[#FF64AE]">About Us</div>
        <div className="text-3xl text-[#091156] font-semibold">We are the best beauty <br /> clinic</div>
        <div className="text-base font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br /> tellus in suspendisse placerat.
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col">
        <PinkButton href="/learn-more">Learn More</PinkButton>
      </div>
      
    </div>
  </div>
)

export default AboutUs