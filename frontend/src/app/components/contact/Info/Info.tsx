import React from 'react';
import ContactInfo from "./ContactInfo";

const Info: React.FC = () => (
  <div>
    <div className="flex flex-col justify-center gap-y-6 text-center xl:mt-[15px]">
      <div className="flex flex-col gap-y-5">
        <div className="text-base font-semibold text-[#FF64AE]">Get in Touch</div>
        <div className="text-4xl text-[#091156] font-semibold xl:-mt-2">
        Get direct handling by us
        </div>
        <div className="text-base tracking-widest xl:mt-2 font-light text-[#8B8B8B]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8 xl:mt-24">
        <ContactInfo />
      </div>
    </div>
  </div>
);

export default Info;