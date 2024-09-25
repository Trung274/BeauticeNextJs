import React from 'react'
import AnimationContactUs from '../../../../public/assets/AnimationContactUs'
import ContactUsForm from './ContactForm'

const Contact: React.FC = () => (
    <div className="flex flex-wrap w-full justify-between items-start">
        <div className="w-full md:w-[45%] mt-6 md:mt-0">
            <div className="text-sm font-semibold text-[#FF64AE]">
                Contact Us
            </div>
            <div className="text-4xl font-semibold text-[#091156] mt-4 ">
            Contact service for our <br /> customers
            </div>
            <div className="flex max-md:w-full">
                <AnimationContactUs />
            </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full md:w-[45%]">
            <div className="text-base font-light text-[#8B8B8B] mt-4 mb-[12px] tracking-widest">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet <br /> luctus venenatis
            </div>
            <ContactUsForm/>
        </div>
    </div>
)

export default Contact