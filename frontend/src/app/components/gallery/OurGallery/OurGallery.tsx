import React from 'react';
import Image from 'next/image';
import GalleryImg1 from '@/public/assets/GalleryImg1.svg';
import GalleryImg2 from '@/public/assets/GalleryImg2.svg';
import GalleryImg3 from '@/public/assets/GalleryImg3.svg';
import GalleryImg4 from '@/public/assets/GalleryImg4.svg';
import GalleryImg5 from '@/public/assets/GalleryImg5.svg';
import GalleryImg6 from '@/public/assets/GalleryImg6.svg';
import GalleryImg7 from '@/public/assets/GalleryImg7.svg';
import GalleryImg8 from '@/public/assets/GalleryImg8.svg';
import GalleryImg9 from '@/public/assets/GalleryImg9.svg';

const OurGallery: React.FC = () => (
  <div className="flex flex-col justify-center gap-y-4 mx-auto pt-8">
    {/* Title */}
    <div className="flex flex-row flex-wrap gap-x-64">
      <div className="flex flex-col gap-3">
        <div className="text-xs font-semibold text-[#FF64AE]">Our Gallery</div>
        <div className="text-3xl text-[#091156] font-semibold">
          Check out the collection pictures
          <br /> from our clinic
        </div>
      </div>
      <div className="self-center right-0">
        <div className='text-base font-light text-[#8B8B8B]'>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit ut aliquam, purus sit amet
          <br /> luctus venenatis
        </div>
      </div>
    </div>
    {/* img */}
    <div className="flex flex-row gap-20 mr-1">
      <div className="flex flex-col gap-20">
        <Image src={GalleryImg1} alt="Gallery Image 1" width={300} height={400} />
        <Image src={GalleryImg4} alt="Gallery Image 4" width={300} height={400} />
        <Image src={GalleryImg7} alt="Gallery Image 7" width={300} height={400} />
      </div>
      <div className="flex flex-col gap-20">
        <Image src={GalleryImg2} alt="Gallery Image 2" width={300} height={400} />
        <Image src={GalleryImg5} alt="Gallery Image 5" width={300} height={400} />
        <Image src={GalleryImg8} alt="Gallery Image 8" width={300} height={400} />
      </div>
      <div className="flex flex-col gap-20 max-md:hidden">
        <Image src={GalleryImg3} alt="Gallery Image 3" width={300} height={400} />
        <Image src={GalleryImg6} alt="Gallery Image 6" width={300} height={400} />
        <Image src={GalleryImg9} alt="Gallery Image 9" width={300} height={400} />
      </div>
    </div>
    {/* Description */}
    <div className='text-base font-light text-[#8B8B8B]'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
      <br /> purus sit amet luctus venenatis, lectus magna fringilla urna,
      porttitor
      <br /> rhoncus dolor purus non enim,{' '}
      <span className="font-semibold text-[#091156]">our teams.</span>
    </div>
  </div>
);

export default OurGallery;