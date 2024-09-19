import React from 'react'
import AnimationContactUs from './AnimationContactUs'
import ContactUsForm from './ContactForm'

const ContactUs: React.FC = () => (
  <div className="flex flex-col pt-36 justify-center">
    <div className="flex flex-wrap flex-row justify-center max-md:flex-col">
      <div className="flex max-md:w-full">
        <AnimationContactUs />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 pl-8">
        <div className="text-sm font-semibold text-[#FF64AE]">
            Contact Us
          </div>
          <div className="text-4xl font-semibold text-[#091156] ">
            Send your inquiry to <br />
            our expert team
          </div>
          <div className="text-base font-light text-[#8B8B8B] mt-[12px] mb-[12px] tracking-widest">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs