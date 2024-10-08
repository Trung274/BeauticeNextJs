'use client'

import React, { useState } from 'react';

const PhoneIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_101_3185)">
      <path d="M16.2239 37.6264C6.58486 27.9873 6.59918 12.3733 16.2239 2.74853C16.6468 2.32564 17.3021 2.25632 17.8021 2.56878L22.6127 5.5756C22.8664 5.73413 23.0562 5.97676 23.1492 6.26109C23.2421 6.54541 23.2321 6.85335 23.121 7.13108L20.7157 13.1444C20.613 13.4012 20.4295 13.6177 20.193 13.7612C19.9564 13.9047 19.6797 13.9674 19.4044 13.9399L15.2622 13.5258C13.6998 17.8498 13.7324 22.6154 15.2622 26.8491L19.4044 26.4349C19.6797 26.4074 19.9565 26.4701 20.193 26.6136C20.4296 26.7571 20.6131 26.9736 20.7158 27.2305L23.1211 33.2438C23.2322 33.5216 23.2421 33.8295 23.1492 34.1138C23.0563 34.3981 22.8664 34.6408 22.6128 34.7993L17.8021 37.8061C17.5575 37.959 17.2683 38.0245 16.9817 37.9918C16.695 37.9592 16.4279 37.8303 16.2239 37.6264ZM27.3414 7.08588C28.2195 8.57374 28.2195 10.4263 27.3414 11.9142C27.0482 12.4109 26.3685 12.5049 25.9522 12.1057L25.5087 11.6808C25.2184 11.4026 25.153 10.9666 25.3409 10.6113C25.5218 10.2688 25.6163 9.88733 25.6163 9.50003C25.6163 9.11272 25.5218 8.73127 25.3409 8.38879C25.1529 8.03343 25.2184 7.59747 25.5087 7.3193L25.9522 6.89432C26.3685 6.49517 27.0482 6.58913 27.3414 7.08588ZM34.1537 0.318093C38.6172 5.63245 38.6137 13.3718 34.1537 18.6819C33.8217 19.0773 33.2237 19.1084 32.851 18.7511L32.4207 18.3387C32.0823 18.0143 32.0513 17.483 32.3517 17.1231C36.0394 12.7042 36.0363 6.29211 32.3517 1.87691C32.0513 1.51695 32.0822 0.985691 32.4207 0.661281L32.851 0.248847C33.2237 -0.108368 33.8217 -0.07727 34.1537 0.318093ZM30.7417 3.65356C33.4173 7.09152 33.4216 11.9029 30.7417 15.3464C30.4159 15.7651 29.7994 15.8104 29.4165 15.4432L28.9847 15.0291C28.6581 14.716 28.6137 14.2057 28.8893 13.8468C30.8588 11.2815 30.8586 7.71837 28.8893 5.15322C28.6137 4.7943 28.6581 4.28405 28.9847 3.97084L29.4165 3.55678C29.7994 3.18962 30.4159 3.23489 30.7417 3.65356Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_101_3185">
        <rect width="38" height="38" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const RequestCallServices = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted phone number:', phoneNumber);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl ml-[35px] pt-4 mx-auto">
      <div className="w-full md:w-[35%] mb-6 ml-1 -mt-1  md:mb-0">
        <h2 className="text-4xl font-bold tracking-[-0.007em] text-[#091156] mb-2">Request call services</h2>
        <p className="font-normal tracking-widest mt-5 text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consect adipiscing elit{' '}
          <a href="#" className="text-[#091156] font-semibold">Contact Us</a>
        </p>
      </div>
      <div className="w-full md:w-[65%] md:pl-8 mt-[6px]">
        <div className="relative pl-12">
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Insert your phone number here ..."
            className="w-[658px] h-[73px] pl-9 pr-32 py-3 border border-[#D9DDFE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-[#FF64AE] text-base tracking-widest placeholder:text-base placeholder:text-[#C5C5C5] placeholder:tracking-widest"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="absolute mr-[9px] right-0 top-0 bottom-0 w-[113px] bg-[#FF64AE] text-white rounded-r-[25px] hover:bg-[#FF64AE] focus:outline-none focus:ring-2 focus:ring-[#FF64AE] focus:ring-offset-2 flex items-center justify-center"
          >
            <div className="mr-2">
              <PhoneIcon />
            </div>
          </button>
        </div>
        <p className="text-xs tracking-widest italic text-[#8B8B8B] text-end mt-2 mr-[10px]">Toll free for our coverage areas.</p>
      </div>
    </div>
  );
};

export default RequestCallServices;