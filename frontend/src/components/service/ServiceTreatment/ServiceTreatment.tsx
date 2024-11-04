import Image from 'next/image'
import ThumbnailService from '@/public/assets/Animation2.svg'
import ArrowIcon from '@/public/assets/angle-double-right.svg'

const ServiceTreatment = () => (
    <div className="container mx-auto xl:-mt-20 px-4 py-8">
        <div className="flex flex-col lg:flex-row-reverse gap-8 xl:gap-x-44 w-full">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
                <div className="relative max-w-sm mx-auto lg:max-w-none lg:w-[96%] xl:-mt-[98px] xl:mr-1">
                    <Image
                        src={ThumbnailService}
                        alt="Skin Treatment Service"
                        width={450}
                        height={278}
                        className="w-full"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col gap-y-5 text-center lg:text-left ml-[2px]">
                    <div className="text-base font-semibold xl:ml-[5px] xl:mt-[10px] text-[#FF64AE]">
                        Skin Treatements
                    </div>
                    <div className="xl:text-4xl ml-1 -mt-2 sm:text-3xl text-[#091156] font-semibold">
                        <span className="block">Skin care and</span>
                        <span className="block xl:mt-[5px]">treatment by expert</span>
                    </div>
                    <div className="text-base tracking-widest font-light text-[#8B8B8B] max-w-xl lg:w-[99%] mx-auto lg:mx-0 xl:ml-1 xl:-mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <span className="text-base tracking-widest text-[#091156] font-semibold ml-[5px] mt-1">
                            Make an Appointment
                        </span>
                        <Image
                            src={ArrowIcon}
                            alt="Arrow"
                            width={25}
                            height={25}
                            className='ml-3 mt-[3px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ServiceTreatment