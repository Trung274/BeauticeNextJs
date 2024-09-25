import Image from 'next/image'
import ImgLinaGustav from '@/public/assets/LinaGustav.svg'
import ImgAdamWhite from '@/public/assets/AdamWhite.svg'
import ImgJaneDoe from '@/public/assets/JaneDoe.svg'

const AssistanceTeam = () => (
  <div className="flex flex-col gap-16">
    <div className="flex flex-col gap-4 text-center justify-center self-center">
    <div className="text-sm font-semibold text-[#FF64AE]">Assistance Team</div>
      <div className="text-3xl sm:text-4xl font-semibold text-[#091156]">Meet the pro assistance</div>
      <div className="text-base font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </div>
    </div>
    <div className="flex flex-col gap-14 justify-center mx-4 self-center">

        {/* Lina Gustav */}
      <div className="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <Image src={ImgLinaGustav} alt="Lina Gustav" />
        </div>
        <div className="flex flex-col gap-4 self-center">
          <div className="sm:text-base font-semibold text-[#091156] text-[18px]">
            Lina Gustav /{' '}
            <span className="text-[14px] font-normal italic text-[#8B8B8B]">
              Pharmacist
            </span>
          </div>
          <div className="text-base font-light text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </div>
        </div>
      </div>

      {/* Adam White */}
      <div className="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <Image src={ImgAdamWhite} alt="Adam White" />
        </div>
        <div className="flex flex-col gap-4 self-center">
          <div className="sm:text-base font-semibold text-[#091156] text-[18px]">
            Adam White /{' '}
            <span className="text-[14px] font-normal italic text-[#8B8B8B]">
              Finance
            </span>
          </div>
          <div className="text-base font-light text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </div>
        </div>
      </div>

      {/* Jane Doe */}
      <div className="flex flex-wrap flex-row justify-center gap-x-16 max-md:gap-8">
        <div>
          <Image src={ImgJaneDoe} alt="Jane Doe" />
        </div>
        <div className="flex flex-col gap-4 self-center">
          <div className="sm:text-base font-semibold text-[#091156] text-[18px]">
            Jane Doe /{' '}
            <span className="text-[14px] font-normal italic text-[#8B8B8B]">
              Marketer
            </span>
          </div>
          <div className="text-base font-light text-[#8B8B8B]">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nam id magnis at placerat
            <br /> pulvinar euismod neque.
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AssistanceTeam