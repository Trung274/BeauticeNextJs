import React from 'react'
import Image from 'next/image'
import AnimationContactUs from '@/public/assets/AnimationContactUs.svg'
import ContactUsForm from './ContactForm'

const Contact: React.FC = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-8">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 xl:ml-[5px] xl:mt-1">
                <div className="text-base font-semibold text-[#FF64AE]">
                    Contact Us
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#091156] mt-3">
                    <span className="block">Contact service for our</span>
                    <span className="block mt-1">customers</span>
                </div>
                <div className="w-full max-w-[600px] mx-auto lg:mx-0 mt-10 xl:-ml-2 xl:mt-[133px] relative">
                    <Image 
                        src={AnimationContactUs}
                        alt="Contact Us Animation"
                        width={544}
                        height={422}
                        priority
                        className="w-full h-auto object-contain scale-100"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2">
                <div className="text-base font-light text-[#8B8B8B] mt-9 xl:mr-8 tracking-widest flex justify-center xl:justify-end mb-20">
                    <p className="max-w-[400px]">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit ut aliquam, purus sit amet 
                        luctus venenatis
                    </p>
                </div>
                <div className='ml-8'>
                    <ContactUsForm />
                </div>
            </div>
        </div>
    </div>
)

export default Contact