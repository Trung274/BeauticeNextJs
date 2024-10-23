import Image from 'next/image';
import thumbnailImage from '@/public/assets/ThumbnailAboutUs3.svg';
import playButtonImage from '@/public/assets/PlayButton4.svg';

const About = () => (
    <div className="flex flex-col gap-y-6 mx-auto justify-center max-w-[1400px] w-full px-4">
        <div className="flex flex-col gap-y-3 ml-[22px] mt-9">
            <div className="text-base font-semibold text-[#FF64AE]">About</div>
            <div className="text-4xl font-semibold">
                <span className="block">We are a leading beauty clinic that has</span>
                <span className="block mt-[6px]">been around since 2002</span>
            </div>
            <div className="text-base tracking-widest mt-[9px] font-light text-[#8B8B8B] w-[71%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,  
                <br /> purus sit amet luctus venenatis
            </div>
        </div>
        <div className="relative w-[103.5%] mx-auto rounded-3xl overflow-hidden xl:-ml-5 -mt-2">
        <div className="aspect-video relative w-full">
                <Image
                    src={thumbnailImage}
                    alt="About Us Video Thumbnail"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                />
            </div>
            <div className="absolute inset-0 flex items-center xl:mb-10 justify-center">
                <Image
                    src={playButtonImage}
                    alt="Play Button"
                    width={170}
                    height={170}
                    className="cursor-pointer hover:scale-110 transition-transform duration-200"
                />
            </div>
        </div>
    </div>
)

export default About;