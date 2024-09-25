import React from 'react';
import PinkButton from '../../common/Buttons/PinkButton';

const InputText1 = ({ ...props }) => (
  <input
    {...props}
    className="h-[61.58px] border rounded-[15px] border-[#D9DDFE] pl-4 w-full"
  />
);

const InputText2 = ({ ...props }) => (
  <textarea
    {...props}
    className="h-[239.47px] border rounded-[15px] border-[#D9DDFE] pl-4 pt-4 resize-none w-full"
  />
);

const ContactUsForm = () => (
  <div className="flex flex-wrap flex-col">
    <div className="flex flex-col gap-y-5">
      {/* Form */}
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex-1">
            <InputText1
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="flex-1">
            <InputText1
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <InputText1
          type="text"
          name="emailAddress"
          placeholder="Email address"
        />
        <InputText1
          type="text"
          name="subject"
          placeholder="Subject message"
        />
        <InputText2
          name="inquiry"
          placeholder="Your inquiry here"
        />
      </div>
      {/* Form */}

      {/* Button */}
      <div className="flex flex-row mt-10">
        <PinkButton href='#'>Send Message</PinkButton>
      </div>
    </div>
  </div>
);

export default ContactUsForm;