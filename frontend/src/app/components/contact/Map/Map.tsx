import React from 'react'
import Image from 'next/image'
import map from '@/public/assets/map.svg'

const Map: React.FC = () => {
  return (
    <div className="relative w-screen mt-[10px] sm:mt-[10px] left-1/2 right-1/2 mx-[-50vw] xl:mt-4">
      <div className="relative">
        <Image
          src={map}
          alt="Location Map"
          layout="responsive"
          width={1440}
          height={529}
          className="object-cover min-h-[400px]"
          priority
        />
        <div className="absolute inset-0 bg-[#091156] bg-opacity-5" />
      </div>
      
      {/* Optional: If you need content overlay on the map */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Add any overlay content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Map;