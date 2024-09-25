import Image from 'next/image'
import Client1SVG from '@/public/assets/Client1.svg'
import Client2SVG from '@/public/assets/Client2.svg'
import Client3SVG from '@/public/assets/Client3.svg'
import Client4SVG from '@/public/assets/Client4.svg'
import Client5SVG from '@/public/assets/Client5.svg'

const Clients = () => (
    <div className="flex flex-col justify-center space-y-12 text-center py-16">
        <div className="flex flex-col gap-y-5">
            <div className="text-sm font-semibold text-[#FF64AE]">Our Clients</div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#091156]">Well-known agencies</h2>
            <p className="text-base font-light mt-2 text-[#8B8B8B] max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
            <Image src={Client1SVG} alt="Client 1" width={150} height={50} />
            <Image src={Client2SVG} alt="Client 2" width={150} height={50} />
            <Image src={Client3SVG} alt="Client 3" width={150} height={50} />
            <Image src={Client4SVG} alt="Client 4" width={150} height={50} />
            <Image src={Client5SVG} alt="Client 5" width={150} height={50} />
        </div>
    </div>
)

export default Clients