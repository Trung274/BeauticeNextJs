import Image from 'next/image'
import ThumbnailAboutUsSVG from '@/public/assets/ThumbnailAboutUs3.svg'

const About = () => (
    <div className="flex flex-col gap-y-5 mx-auto justify-center">
        <div className="flex flex-col gap-y-2 justify-center">
            <div className="flex flex-col gap-y-5">
                <div className="text-xs font-semibold text-[#FF64AE]">About Us</div>
                <div className="text-3xl font-semibold">We are the best beauty clinic</div>
                <div className="text-base font-light text-[#8B8B8B] w-[71%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                    quam suscipit purus donec amet. Egestas volutpat facilisi eu
                    libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                    tellus in suspendisse placerat.
                    <br />
                    <br />
                    Id dui erat sed quam tellus in purus. Pellentesque
                    congue fringilla cras tellus enim.
                </div>
            </div>
        </div>
        <div className="container max-sm:[margin-left: 50px]">
            <div className="max-w-sm mx-auto md:max-w-none">
                <Image
                    src={ThumbnailAboutUsSVG}
                    alt=""
                    width={476}
                    height={350}
                    layout="responsive"
                />
            </div>
        </div>
    </div>
)

export default About