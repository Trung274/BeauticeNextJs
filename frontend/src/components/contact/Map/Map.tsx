import React from 'react';

const Map = () => {
  return (
    <div className="relative w-screen mt-4 left-1/2 right-1/2 -mx-[50vw]">
      <div className="relative aspect-[4/3] md:aspect-[16/9] w-full min-h-[400px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119169.9429265491!2d105.70021523457099!3d21.03025645233406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135ab4cb69f572b%3A0x3b8fbd089b01207f!2zMTUvOCBQLiBEdXkgVMOibiwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTEzMTA!3m2!1d21.0302763!2d105.7826169!5e0!3m2!1sen!2s!4v1730279190162!5m2!1sen!2s"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;

// import React from 'react'
// import Image from 'next/image'
// import map from '@/public/assets/map.svg'

// const Map: React.FC = () => {
//   return (
//     <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw] xl:mt-4">
//       <div className="relative">
//         <Image
//           src={map}
//           alt="Location Map"
//           layout="responsive"
//           width={1440}
//           height={529}
//           className="object-cover min-h-[400px]"
//           priority
//         />
//         <div className="absolute inset-0 bg-[#091156] bg-opacity-5" />
//       </div>
      
//       {/* Optional: If you need content overlay on the map */}
//       <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
//         <div className="flex justify-between items-center w-full">
//           {/* Add any overlay content here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;