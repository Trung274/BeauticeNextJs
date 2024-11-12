import React from 'react';
import FooterLogo from '@/public/assets/FooterLogo';
import FacebookWhite from '@/components/common/Icons/FacebookWhite';
import TwitterWhite from '@/components/common/Icons/TwitterWhite';
import LinkedinWhite from '@/components/common/Icons/LinkedinWhite';
import YoutubeWhite from '@/components/common/Icons/YoutubeWhite';
import InstagramWhite from '@/components/common/Icons/InstagramWhite';
import FooterBg from './FooterBg';
import CaretRight from './CaretRight';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => (
  <footer className={`relative w-full overflow-hidden ${className}`}>
    <div className="absolute inset-0 w-full">
      <FooterBg className="w-full h-full" />
    </div>

    <div className="relative z-10 py-16 w-full">
      <div className="max-w-6xl mx-auto px-24 sm:px-20 md:px-36 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-36 mt-[174px] w-full">
          {/* Logo + Address info */}
          <div className="flex flex-col gap-4 pt-1 w-full lg:max-w-[50%] -ml-[1.6rem]">
            <div className='ml-6 xl:ml-0'>
            <FooterLogo />
            </div>
            <div className="flex flex-col w-full pl-[31px] pt-[20px]">
              <p className="text-base text-[#D7DBFF] leading-[21px] font-regular tracking-widest text-wrap">
                <strong className="font-bold">Beautice</strong> is a Beauty Clinic WordPress Theme.
              </p>
              <p className="text-sm text-[#D7DBFF] leading-6 font-medium italic pt-[22px] pl-[1px] tracking-widest">
                Baker Steet 101, NY, United States.
              </p>
              <div className="flex flex-col sm:flex-row">
                <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium italic tracking-widest">
                  +521 569 8966.
                </p>
                <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium sm:pl-[44px] tracking-widest underline">
                  mail@company.com.
                </p>
              </div>
            </div>
          </div>

          {/* Pages and Information */}
          <div className="flex flex-col w-full lg:max-w-[50%]">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {/* Pages */}
              <div className="flex flex-col xl:ml-12 xl:-mt-3 gap-6">
                <div className="font-semibold text-lg text-[#ffffff] tracking-widest pb-2">Pages</div>
                <ul className="flex flex-col gap-[10px] -mt-1 list-none p-0">
                  <li className="flex items-center gap-1 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/home2" className='ml-1 tracking-wider-plus'>Home</a>
                  </li>
                  <li className="flex items-center gap-1 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/about" className='ml-1 tracking-wider-plus'>About</a>
                  </li>
                  <li className="flex items-center gap-1 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/services" className='ml-1 tracking-wider-plus'>Services</a>
                  </li>
                  <li className="flex items-center gap-1 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/gallery" className='ml-1 mt-1 tracking-wider-plus'>Gallery</a>
                  </li>
                  <li className="flex items-center gap-1 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/team" className='ml-1 tracking-wider-plus'>Team</a>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div className="flex flex-col xl:-mr-8 xl:-mt-3 gap-6 min-w-[220px]">
                <div className="font-semibold text-lg text-[#ffffff] tracking-widest -ml-[1px] pb-2">Informations</div>
                <ul className="flex flex-col gap-[11px] -mt-[5px] list-none p-0">
                  <li className="flex -ml-[1px] items-center text-base tracking-widest gap-2 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/terms">Terms & conditions</a>
                  </li>
                  <li className="flex -ml-[1px] items-center text-base tracking-widest gap-2 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/privacy">Privacy policy</a>
                  </li>
                  <li className="flex -ml-[1px] items-center text-base tracking-widest gap-2 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="flex -ml-[1px] items-center text-base tracking-widest gap-2 text-[#D7DBFF]">
                    <CaretRight />
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social icon + copyright */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4 mb-10 pt-8 w-full -mt-10 -ml-7">
          <div className="flex gap-x-7 sm:gap-x-11 xl:ml-1 mt-1 sm:mb-0 flex-wrap justify-center">
            <FacebookWhite />
            <TwitterWhite />
            <LinkedinWhite />
            <YoutubeWhite />
            <InstagramWhite />
          </div>
          <div className="text-base -mr-14 tracking-widest text-[#D7DBFF] text-center sm:text-right">
            © AltDesain Studio 2021 - All right reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;