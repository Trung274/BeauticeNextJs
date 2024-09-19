import React from 'react';
import FooterLogo from '@/public/assets/FooterLogo';
import FacebookWhite from '../Icons/FacebookWhite';
import TwitterWhite from '../Icons/TwitterWhite';
import LinkedinWhite from '../Icons/LinkedinWhite';
import YoutubeWhite from '../Icons/YoutubeWhite';
import InstagramWhite from '../Icons/InstagramWhite';
import FooterBg from './FooterBg';
import CaretRight from './CaretRight';

const Footer = () => (
  <footer className="relative w-full overflow-hidden">
    <div className="absolute inset-0 w-full">
      <FooterBg className="w-full h-full" />
    </div>

    <div className="relative z-10 py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-36 mt-44 w-full">
          {/* Logo + Address info */}
          <div className="flex flex-col gap-4 w-full lg:max-w-[50%]">
            <FooterLogo />
            <div className="flex flex-col w-full pl-[31px] pt-[35px]">
              <p className="text-base text-[#D7DBFF] leading-[21px] font-regular tracking-widest text-wrap">
                <strong className="font-bold">Beautice</strong> is a Beauty Clinic WordPress Theme.
              </p>
              <p className="text-sm text-[#D7DBFF] leading-6 font-medium-italic pt-[22.5px] pl-[1px] tracking-widest">
                Baker Steet 101, NY, United States.
              </p>
              <div className="flex flex-col sm:flex-row pt-[1px]">
                <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic tracking-widest">
                  +521 569 8966.
                </p>
                <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic sm:pl-[42px] tracking-widest underline">
                  mail@company.com.
                </p>
              </div>
            </div>
          </div>

          {/* Pages and Information */}
          <div className="flex flex-col w-full lg:max-w-[50%]">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {/* Pages */}
              <div className="flex flex-col gap-6">
                <div className="font-semibold text-lg text-[#ffffff] tracking-widest pb-2">Pages</div>
                <ul className="flex flex-col gap-2 list-none p-0">
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/home">Home</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/about">About</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/services">Services</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/gallery">Gallery</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/team">Team</a>
                </li>
              </ul>
              </div>

              {/* Information */}
              <div className="flex flex-col gap-6">
                <div className="font-semibold text-lg text-[#ffffff] tracking-widest pb-2">Information</div>
                <ul className="flex flex-col gap-2 list-none p-0">
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/terms">Terms & conditions</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/privacy">Privacy policy</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/blog">Blog</a>
                </li>
                <li className="flex items-center gap-1 text-[#D7DBFF]">
                  <CaretRight />
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social icon + copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pt-8 w-full">
          <div className="flex gap-6 sm:gap-12 mb-4 sm:mb-0 flex-wrap justify-center">
            <FacebookWhite />
            <TwitterWhite />
            <LinkedinWhite />
            <YoutubeWhite />
            <InstagramWhite />  
          </div>
          <div className="text-base tracking-widest text-[#D7DBFF] text-center sm:text-right">
            © AltDesain Studio 2021 - All right reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;