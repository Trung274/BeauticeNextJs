// import React from 'react';
// import Image from 'next/image';
// import GalleryImg1 from '@/public/assets/GalleryImg1.svg';
// import GalleryImg2 from '@/public/assets/GalleryImg2.svg';
// import GalleryImg3 from '@/public/assets/GalleryImg3.svg';
// import GalleryImg4 from '@/public/assets/GalleryImg4.svg';
// import GalleryImg5 from '@/public/assets/GalleryImg5.svg';
// import GalleryImg6 from '@/public/assets/GalleryImg6.svg';
// import GalleryImg7 from '@/public/assets/GalleryImg7.svg';
// import GalleryImg8 from '@/public/assets/GalleryImg8.svg';
// import GalleryImg9 from '@/public/assets/GalleryImg9.svg';

// const OurGallery: React.FC = () => (
//   <div className="flex flex-col justify-center gap-y-4 mx-auto pt-9 max-w-6xl">
//     {/* Title */}
//     <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] items-center gap-y-8">
//       <div className="flex flex-col gap-3">
//         <div className="text-base xl:ml-[6px] font-semibold text-[#FF64AE]">Our Gallery</div>
//         <div className="text-3xl md:text-4xl xl:ml-[6px] text-[#091156] font-semibold">
//           <span className="block">Check out the collection pictures</span>
//           <span className="block mt-[6px]">from our clinic</span>
//         </div>
//       </div>
//       <div className="self-center justify-self-start lg:justify-self-end xl:mr-11 mt-4 lg:mt-0">
//         <div className='text-sm md:text-base font-light xl:mt-3 tracking-widest text-[#8B8B8B]'>
//           Lorem ipsum dolor sit amet, consectetur
//           <br /> adipiscing elit ut aliquam, purus sit amet
//           <br /> luctus venenatis
//         </div>
//       </div>
//     </div>
//     {/* img */}
//     <div className=" xl:flex xl:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9 mt-12 md:mt-[75px] ml-0 md:ml-[6px]">
//       <div className="flex flex-col gap-6 md:gap-[38px]">
//         <Image src={GalleryImg1} alt="Gallery Image 1" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg4} alt="Gallery Image 4" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg7} alt="Gallery Image 7" width={356} height={210} className="w-full h-auto" />
//       </div>
//       <div className="flex flex-col gap-6 md:gap-[38px]">
//         <Image src={GalleryImg2} alt="Gallery Image 2" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg5} alt="Gallery Image 5" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg8} alt="Gallery Image 8" width={356} height={210} className="w-full h-auto" />
//       </div>
//       <div className="flex flex-col gap-6 md:gap-[38px]">
//         <Image src={GalleryImg3} alt="Gallery Image 3" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg6} alt="Gallery Image 6" width={356} height={210} className="w-full h-auto" />
//         <Image src={GalleryImg9} alt="Gallery Image 9" width={356} height={210} className="w-full h-auto" />
//       </div>
//     </div>
//     {/* Description */}
//     <div className='text-sm md:text-base font-light mt-8 md:mt-[51px] ml-0 md:ml-[5px] tracking-widest text-[#8B8B8B] text-center md:text-left'>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
//       <br className="hidden md:block" /> purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
//       <br className="hidden md:block" /> rhoncus dolor purus non enim,{' '}
//       <span className="font-semibold text-[#091156]">our teams.</span>
//     </div>
//   </div>
// );

// export default OurGallery;

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

const GalleryImage: React.FC<{ src: any; alt: string; className?: string }> = ({ src, alt, className = "" }) => (
  <div className={`aspect-[1.7] ${className}`}>
    <Image 
      src={src} 
      alt={alt} 
      width={356} 
      height={210} 
      className="w-full h-auto" 
    />
  </div>
);

const OurGallery: React.FC = () => {
  const images = [
    { src: GalleryImg1, alt: "Gallery Image 1" },
    { src: GalleryImg2, alt: "Gallery Image 2" },
    { src: GalleryImg3, alt: "Gallery Image 3" },
    { src: GalleryImg4, alt: "Gallery Image 4" },
    { src: GalleryImg5, alt: "Gallery Image 5" },
    { src: GalleryImg6, alt: "Gallery Image 6" },
    { src: GalleryImg7, alt: "Gallery Image 7" },
    { src: GalleryImg8, alt: "Gallery Image 8" },
    { src: GalleryImg9, alt: "Gallery Image 9" },
  ];

  return (
    <div className="flex flex-col justify-center gap-y-4 mx-auto pt-9 max-w-6xl">
      {/* Title */}
      <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] items-center gap-y-8">
        <div className="flex flex-col gap-3">
          <div className="text-base xl:ml-[6px] font-semibold text-[#FF64AE]">Our Gallery</div>
          <div className="text-3xl md:text-4xl xl:ml-[6px] text-[#091156] font-semibold">
            <span className="block">Check out the collection pictures</span>
            <span className="block mt-[6px]">from our clinic</span>
          </div>
        </div>
        <div className="self-center justify-self-start lg:justify-self-end xl:mr-11 mt-4 lg:mt-0">
          <div className='text-sm md:text-base font-light xl:mt-3 tracking-widest text-[#8B8B8B]'>
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit ut aliquam, purus sit amet
            <br /> luctus venenatis
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mt-12 md:mt-[75px] ml-0 md:ml-[6px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 md:gap-[38px]">
          {images.map((image, index) => (
            <GalleryImage
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className={`
                transform transition-transform duration-300 hover:scale-105
                ${index === images.length - 1 && images.length % 2 === 1 
                  ? 'md:col-span-2 lg:col-span-1' 
                  : ''}
              `}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className='text-sm md:text-base font-light mt-8 md:mt-[51px] ml-0 md:ml-[5px] tracking-widest text-[#8B8B8B] text-center md:text-left'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        <br className="hidden md:block" /> purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        <br className="hidden md:block" /> rhoncus dolor purus non enim,{' '}
        <span className="font-semibold text-[#091156]">our teams.</span>
      </div>
    </div>
  );
};

export default OurGallery;