import React from 'react'
import AnimationContactUs from '../../../../public/assets/AnimationContactUs'
import ContactUsForm from './ContactForm'

const ContactUs: React.FC = () => (
  <div className="flex flex-col mb-28 justify-center">
    <div className="flex flex-wrap flex-row justify-center max-md:flex-col px-4">
      <div className="flex max-md:w-full -ml-3 mt-[161px] relative right-[6px]">
        <AnimationContactUs />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 md:pl-24">
          <div className="text-base tracking-wide -ml-[2px] font-semibold text-[#FF64AE]">
            Contact Us
          </div>
          <div className="text-4xl -mt-2 -ml-[2px] font-semibold text-[#091156] ">
            <span className="block">Send your inquiry to</span>
            <span className="block mt-[6px]">our expert team</span>
          </div>
          <div className="text-base mt-[2px] -ml-1 pl-1 font-light text-[#8B8B8B] mb-[12px] tracking-widest">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
          <div className='flex flex-col pt-4 -mr-[19px]'>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs