import Image from 'next/image'
import ThumbnailService from '@/public/assets/Animation3.svg'
import ArrowIcon from '@/public/assets/angle-double-right.svg' 

const ServiceProducts = () => (
    <div className="flex flex-wrap w-full justify-between items-start">
        <div className="w-full md:w-[45%] mt-6 md:mt-0">
        <div className="max-w-sm mx-auto md:max-w-none">
                <Image
                    src={ThumbnailService}
                    alt=""
                    width={490}
                    height={302.67}
                    layout="responsive"
                />
            </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
        <div className="flex flex-col gap-y-5">
                <div className="text-xs font-semibold text-[#FF64AE]">Beauty Product</div>
                <div className="text-3xl text-[#091156] font-semibold">We present quality <br /> beauty products</div>
                <div className="text-base font-light text-[#8B8B8B] w-[71%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                </div>
                <div className="flex items-center">
                    <span className="text-base text-[#091156] font-semibold mr-2">Make an appointment</span>
                    <Image
                        src={ArrowIcon}
                        alt="Arrow"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    </div>
)

export default ServiceProducts