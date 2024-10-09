import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'
import PinkButton from '../../common/Buttons/PinkButton'

const AboutUs = () => (
  <div className="flex flex-wrap w-full justify-between items-start">
    <div className="w-full ml-10 md:w-2/5 mt-6 md:mt-[2px]"> 
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
    <div className="flex flex-col gap-y-5 w-full md:w-1/2">
      <div className="flex flex-col ml-[88px] gap-y-3">
        <div className="text-base font-semibold text-[#FF64AE]">About Us</div>
        <div className="text-4xl text-[#091156] font-semibold">
        <span className="block">We are the best beauty</span>
        <span className="block mt-[6px]">clinic</span>
          </div>
        <div className="text-base tracking-widest font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br /> tellus in suspendisse placerat.
        </div>
      </div>

      <div className="flex flex-row ml-[88px] mt-[29px] max-md:flex-col">
      <a href="/learn-more" className='px-10 py-2.5 border-2 border-[#ff64ae] bg-[#ff64ae] text-white font-semibold text-base tracking-widest rounded-full h-[58px] w-[200px] inline-flex items-center justify-center whitespace-nowrap transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ff64ae]'>Learn More</a>
      </div>
      
    </div>
  </div>
)

export default AboutUs