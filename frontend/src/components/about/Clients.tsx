import Image from 'next/image'
import Client1SVG from '@/public/assets/Client1.svg'
import Client2SVG from '@/public/assets/Client2.svg'
import Client3SVG from '@/public/assets/Client3.svg'
import Client4SVG from '@/public/assets/Client4.svg'
import Client5SVG from '@/public/assets/Client5.svg'

const Clients = () => (
    <div className="flex flex-col justify-center space-y-8 sm:space-y-10 xl:space-y-12 text-center py-8 sm:py-12 xl:py-16">
        <div className="flex flex-col xl:-ml-6 mt-2 gap-y-3 sm:gap-y-4 xl:gap-y-5 px-4 sm:px-0">
            <div className="text-base mt-[2px] font-semibold text-[#FF64AE]">Our Clients</div>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl -mt-2 font-semibold text-[#091156]">Well-known agencies</h2>
            <p className="text-sm sm:text-base tracking-widest font-light mt-[2px] text-[#8B8B8B] max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
        <div className="flex flex-wrap xl:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-x-[54px] pt-8 sm:pt-10 md:pt-12 xl:pt-[55px] px-4 xl:pr-5">
            <Image src={Client1SVG} alt="Client 1" 
                className="w-32 sm:w-36 md:w-40 lg:w-[150px]"
                width={150} height={50} 
            />
            <Image src={Client2SVG} alt="Client 2" 
                className="w-32 sm:w-36 md:w-40 lg:w-[150px]"
                width={150} height={50} 
            />
            <Image src={Client3SVG} alt="Client 3" 
                className="w-32 sm:w-36 md:w-40 lg:w-[150px]"
                width={150} height={50} 
            />
            <Image src={Client4SVG} alt="Client 4" 
                className="w-32 sm:w-36 md:w-40 lg:w-[150px]"
                width={150} height={50} 
            />
            <Image src={Client5SVG} alt="Client 5" 
                className="w-32 sm:w-36 md:w-40 lg:w-[150px]"
                width={150} height={50} 
            />
        </div>
    </div>
)

export default Clients