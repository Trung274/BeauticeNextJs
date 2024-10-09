import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'

const Vision = () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
        <div className="md:col-span-2">
            <div className="max-w-sm ml-[89px] mt-[38px] mx-auto md:max-w-none relative w-full md:w-[81%] aspect-[490/303]">
                <Image
                    src={ThumbnailAboutUs2SVG}
                    alt="Our Vision"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-y-5">
            <div className="flex flex-col ml-[205px] mt-2 gap-y-5">
                <div className="text-base font-semibold mt-[1px] text-[#FF64AE]">Our Vision</div>
                <div className="text-4xl -mt-2 tracking-normal text-[#091156] font-semibold">
                    <span className="block">Be the best and go </span>
                    <span className="block mt-[6px]"> international</span>
                </div>
                <div className="text-base -mt-1 tracking-widest font-light text-[#8B8B8B] md:w-[89%]">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero.
                    <br />
                    <br />
                    Nunc, ipsum ornare mauris sit quam quis enim. <br /> Varius tellus in suspendisse placerat.
                </div>
            </div>
        </div>
    </div>
)

export default Vision