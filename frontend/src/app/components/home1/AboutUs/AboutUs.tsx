import Image from 'next/image'
import ThumbnailAboutUsSVG from '@/public/assets/ThumbnailAboutUs.svg'
import NavButton from '../../common/Buttons/NavButton'
import PinkButton from '../../common/Buttons/PinkButton'

const AboutUs = () => (
  <div className="flex flex-wrap w-full justify-between items-start">
    <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
      <div className="flex flex-col gap-y-5">
        <div className="text-xs font-semibold text-[#FF64AE]">About Us</div>
        <div className="text-3xl text-[#091156] font-semibold">We are the best beauty clinic</div>
        <div className="text-base font-light text-[#8B8B8B] w-[71%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
          quam suscipit purus donec amet. Egestas volutpat facilisi eu
          libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
          tellus in suspendisse placerat.
          <br />
          <br />
          Id dui erat sed quam tellus in purus. Pellentesque
          congue fringilla cras tellus enim.
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col">
        <PinkButton href="/learn-more">Learn More</PinkButton>
        <div className="flex flex-row items-center pl-8 place-content-center max-md:pl-0 max-md:place-content-start max-md:mt-4">
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
          <NavButton href="/watch-video">Watch Video</NavButton>
        </div>
      </div>
      
    </div>
    <div className="w-full md:w-[45%] mt-6 md:mt-0">
      <div className="max-w-sm mx-auto md:max-w-none">
        <Image
          src={ThumbnailAboutUsSVG}
          alt=""
          width={476}
          height={350}
          layout="responsive"
        />
      </div>
    </div>
  </div>
)

export default AboutUs