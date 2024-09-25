import Image from 'next/image'
import ThumbnailMission from '@/public/assets/MissionThumbnail.svg'

const Mission = () => (
    <div className="flex flex-wrap w-full justify-between items-start">
        <div className="w-full md:w-[45%] mt-6 md:mt-0">
            <div className="flex flex-col gap-y-5">
                <div className="text-xs font-semibold text-[#FF64AE]">Our Mission</div>
                <div className="text-3xl text-[#091156] font-semibold">Special & premium service
                 <br /> to any clients</div>
                <div className="text-base font-light text-[#8B8B8B] w-[71%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    <br />
                    <br />
                    Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
            <div className="max-w-sm mx-auto md:max-w-none">
                <Image
                    src={ThumbnailMission}
                    alt=""
                    width={490}
                    height={302.67}
                    layout="responsive"
                />
            </div>
        </div>
    </div>
)

export default Mission

