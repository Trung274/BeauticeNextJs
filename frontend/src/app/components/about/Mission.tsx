import Image from 'next/image'
import ThumbnailMission from '@/public/assets/MissionThumbnail.svg'

const Mission = () => (
    <div className="flex flex-wrap w-full mt-2 ml-[38px] justify-between items-start">
        <div className="w-full md:w-[45%] mt-6 md:mt-0">
            <div className="flex flex-col gap-y-5">
                <div className="text-base mt-[2px] font-semibold text-[#FF64AE]">Our Mission</div>
                <div className="text-4xl -mt-2 text-[#091156] font-semibold">
                    <span className="block">Special & premium service</span>
                    <span className="block mt-[6px]"> to any clients</span>
                </div>
                <div className="text-base -mt-1 tracking-widest font-light text-[#8B8B8B] w-[82%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    <br />
                    <br />
                    Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
            <div className="max-w-sm mx-auto -ml-6 -mt-2 md:max-w-none relative w-full md:w-[93%] aspect-[490/303]">
                <Image
                    src={ThumbnailMission}
                    alt="Our Mission"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    </div>
)

export default Mission