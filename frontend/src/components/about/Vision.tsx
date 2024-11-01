import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'

const Vision = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
            {/* Image Section */}
            <div className="lg:col-span-2">
                <div className="relative w-full max-w-sm mx-auto lg:max-w-none lg:w-[83%] xl:mt-2 xl:ml-[74px] aspect-[490/303]">
                    <Image
                        src={ThumbnailAboutUs2SVG}
                        alt="Our Vision"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3">
                <div className="flex flex-col gap-y-4 text-center lg:text-left lg:ml-8 xl:-mt-[22px] xl:ml-[200px]">
                    <div className="text-base font-semibold xl:ml-[1px] text-[#FF64AE]">
                        Our Vision
                    </div>
                    <div className="text-2xl sm:text-3xl xl:text-4xl xl:ml-[1px] xl:-mt-1 text-[#091156] font-semibold leading-tight">
                        <span className="block">Be the best and go</span>
                        <span className="block mt-[6px]">international</span>
                    </div>
                    <div className="text-base tracking-widest font-light text-[#8B8B8B] max-w-md mx-auto lg:mx-0 xl:-mt-[1px] xl:ml-[1px]">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Elit, quam suscipit purus donec 
                        amet. Egestas volutpat facilisi eu libero.
                        <br />
                        <br />
                        Nunc, ipsum ornare mauris sit quam quis enim. 
                        Varius tellus in suspendisse placerat.
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Vision