import Image from 'next/image'
import ThumbnailAboutUsSVG from '@/public/assets/ThumbnailAboutUs'
import NavButton from '../../common/Buttons/NavButton'
import PinkButton from '../../common/Buttons/PinkButton'
import Link from 'next/link'

const AboutUs = () => (
  <div className="flex flex-wrap w-full justify-between items-start">
    <div className="flex flex-col mt-16 gap-y-3 w-full md:w-[55%]">
      <div className="flex flex-col ml-6 gap-y-3">
        <div className="text-base mt-3 font-semibold text-[#FF64AE]">About Us</div>
        <div className="text-4xl text-[#091156] font-semibold">We are the best beauty clinic</div>
        <div className="text-base mt-[10px] -ml-[2px] tracking-wider-plus font-medium text-[#8B8B8B] w-[76%]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit,
          quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu
          libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br />
          tellus in suspendisse placerat.
          <br />
          <br />
          Id dui erat sed quam tellus in purus. Pellentesque <br />
          congue fringilla cras tellus enim.
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col ml-[22px] mt-10">
        <div className=''>
        <a href="/learn-more" className='px-10 py-2.5 border-2 border-[#ff64ae] bg-[#ff64ae] text-white font-semibold text-base tracking-widest rounded-full h-[60px] w-[200px] inline-flex items-center justify-center whitespace-nowrap transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ff64ae]'>Learn More</a>
        </div>
        <div className="flex flex-row items-center pl-11 place-content-center max-md:pl-0 max-md:place-content-start max-md:mt-4">
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            aria-label="Play video"
          >
            <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
            <path
              d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
              fill="white"
            />
          </svg>
          <div className='text-lg ml-1 tracking-wider font-medium text-[#8B8B8B]'>Watch Video</div>
        </div>
      </div>
      
    </div>
    <div className="w-full mt-[45px] mr-8 md:w-[45%] md:max-w-none md:-ml-8">
        <ThumbnailAboutUsSVG />
    </div>
  </div>
)

export default AboutUs