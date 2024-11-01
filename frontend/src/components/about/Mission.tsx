import Image from 'next/image'
import ThumbnailMission from '@/public/assets/MissionThumbnail.svg'

const Mission = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row xl:ml-5 xl:-mt-15 gap-8 w-full">
            {/* Content Section */}
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-y-4 text-center lg:text-left">
                    <div className="text-base font-semibold xl:ml-[3px] xl:mt-[7px] text-[#FF64AE]">
                        Our Mission
                    </div>
                    <div className="text-2xl sm:text-3xl xl:text-4xl xl:-mt-[3px] xl:ml-[2px] text-[#091156] font-semibold leading-tight">
                        <span className="block">Special & premium service</span>
                        <span className="block mt-1">to any clients</span>
                    </div>
                    <div className="text-base tracking-widest font-light text-[#8B8B8B] max-w-xl lg:w-[82%] xl:ml-[2px] mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                        <br />
                        <br />
                        Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 xl:-mt-1">
                <div className="relative w-full max-w-sm mx-auto lg:max-w-none lg:w-[89%] xl:mr-[26px] aspect-[490/303]">
                    <Image
                        src={ThumbnailMission}
                        alt="Our Mission"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Mission