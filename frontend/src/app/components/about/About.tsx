import ThumbnailAboutUsSVG from '@/public/assets/ThumbnailAboutUs3'
import PlayButtonSVG from '@/public/assets/PlayButton4.svg';
import Image from 'next/image';

const About = () => (
    <div className="flex flex-col gap-y-10 mx-auto justify-center max-w-[1400px] w-full px-4">
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
        <div className="relative -ml-[53px] -mt-6 w-full aspect-[1290/690]">
            <ThumbnailAboutUsSVG 
                className="w-[1290px] h-full" 
            />
            <div className="absolute top-1/2 left-1/2 ml-[53px] -mt-5 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={PlayButtonSVG} alt="Play Button" width={173} height={173} />
            </div>
        </div>
    </div>
)

export default About;