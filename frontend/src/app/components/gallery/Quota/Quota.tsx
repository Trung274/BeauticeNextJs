import Image from 'next/image'
import ThumbnailAboutUs2SVG from '@/public/assets/ThumbnailAboutUs2.svg'
import PinkButton from '../../common/Buttons/PinkButton'

const Quota = () => (
    <div className="flex flex-wrap w-full justify-between items-start">
        <div className="w-full md:w-[45%] mt-6 md:mt-0">
            <div className="flex flex-col gap-y-5">
                <div className="text-xs font-semibold text-[#FF64AE]">Get The Quota</div>
                <div className="text-3xl text-[#091156] font-semibold">Want to be handled by our
                    <br /> professional team immediately?</div>
                <div className="text-base font-light text-[#8B8B8B] w-[71%]">
                Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center pt-16 gap-y-5 w-full md:w-[45%]">
            <div className="flex flex-row max-md:flex-col">
                <PinkButton href="#">Make an Appointment</PinkButton>
            </div>

        </div>
    </div>
)

export default Quota