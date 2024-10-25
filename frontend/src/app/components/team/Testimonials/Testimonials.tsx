import React from 'react';
import Image from 'next/image';
import Customer1 from '@/public/assets/customer1.svg'
import ArrowLeftIcon from '@/public/assets/arrow-left.svg'
import ArrowRightIcon from '@/public/assets/arrow-right.svg'
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative "> 
      <div className="flex flex-col gap-4 text-center justify-center self-center">
        <p className="text-base text-center font-semibold text-[#FF64AE] xl:pt-[5px]">Our Testimonials</p>
        <h2 className="text-3xl text-center sm:text-4xl font-semibold text-[#091156] xl:-mt-1">What our customer says</h2>
        <p className="text-base text-center tracking-widest font-light text-[#8B8B8B] xl:mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="flex justify-center m-12">
          <Image
            src={Customer1} 
            alt="Customer"
            width={73}
            height={73}
            className="rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-9">
          <p className="text-sm text-center tracking-widest font-light text-[#8B8B8B] xl:-mt-5 xl:leading-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus <br />
            metus tincidunt laoreet ultricies condimentum ac integer <br />
            aliquam. Lorem diam dignissim amet fermentum elementum dui <br />
            dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. <br />
            Purus volutpat in turpis gravida blandit.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current xl:-mt-[18px]" />
          ))}
        </div>

        <div className="flex justify-between items-center absolute left-0 right-0 top-1/2 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[197px] xl:mt-[67px]">
          <button className="p-2 rounded-full hover:bg-gray-300 transition-colors">
            <Image 
              src={ArrowLeftIcon} 
              alt="Previous"
              width={25}
              height={25}
            />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-300 transition-colors">
            <Image 
              src={ArrowRightIcon} 
              alt="Next"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;