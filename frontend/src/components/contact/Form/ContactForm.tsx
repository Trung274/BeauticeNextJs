import React from 'react';
import PinkButton1 from '@/components/common/Buttons/PinkButton1';

const InputField = ({ ...props }) => (
  <input
    {...props}
    className="w-full h-[61px] -mt-[2px] border border-[#D9DDFE] rounded-[15px] px-4 text-base text-gray-500 placeholder:text-base placeholder:text-gray-400 placeholder:tracking-widest placeholder:relative placeholder:top-0 placeholder:left-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF64AE] focus:border-transparent"
  />
);

const TextArea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full h-[240px] border border-[#D9DDFE] rounded-[15px] px-4 py-4 text-base text-gray-500 placeholder:text-sm placeholder:text-gray-400 placeholder:tracking-widest-plus placeholder:relative placeholder:top-2 placeholder:left-1.5 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF64AE] focus:border-transparent"
  />
);

const ContactUsForm: React.FC = () => (
  <form className="w-full max-w-[520px] space-y-[38px]">
    <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0">
      <InputField type="text" placeholder="First name" className="w-full" />
      <InputField type="text" placeholder="Last name" className="w-full" />
    </div>
    <InputField type="email" placeholder="Email address" />
    <InputField type="text" placeholder="Subject message" />
    <TextArea placeholder="Your inquiry here" />
    <div className="pt-[10px]">
      <PinkButton1 href="#">Send Message</PinkButton1>
    </div>
  </form>
);

export default ContactUsForm;