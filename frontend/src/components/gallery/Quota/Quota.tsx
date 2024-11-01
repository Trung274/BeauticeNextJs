import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'
import PinkButton1 from '../../../../components/common/Buttons/PinkButton1'

const Quota = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12 py-8 md:py-12">
            {/* Left Content */}
            <div className="w-full md:w-[55%] space-y-4 md:space-y-6 xl:max-w-7xl">
                <div className="text-sm md:text-base font-semibold text-[#FF64AE] tracking-normal xl:mt-[7px] xl:ml-1 xl:-mb-3">
                    Get The Quota
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl text-[#091156] font-semibold leading-tight">
                <span className="block">Want to be handled by our </span>
                <span className="block mt-[6px]">professional team immediately?</span>
                </div>
                <p className="text-sm tracking-widest sm:text-base xl:ml-[2px] text-[#8B8B8B] font-light leading-relaxed max-w-xl">
                    Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                </p>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[45%] flex justify-center md:justify-end items-center">
                <div className="w-full sm:w-auto xl:mr-[59px] xl:mt-[10px]">
                <a href="/learn-more" className='px-10 py-2.5 border-2 border-[#ff64ae] bg-[#ff64ae] text-white font-semibold text-base tracking-widest rounded-full h-[58px] w-[316px] inline-flex items-center justify-center whitespace-nowrap transition duration-300 hover:scale-105 hover:bg-white hover:text-[#ff64ae]'>Make an Appointment</a>
                </div>
            </div>
        </div>
    </div>
)

export default Quota