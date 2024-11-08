import React from 'react';
import Services from './ServieCard';

const CoreServices: React.FC = () => (
  <div>
    <div className="flex flex-col justify-center gap-y-6 text-center">
      <div className="flex flex-col">
        <div className="text-base pt-[2px] font-semibold text-[#FF64AE]">Main Services</div>
        <div className="text-4xl pt-[10px] text-[#091156] font-semibold leading-tight">
          Learn services to focus <br />
          on your beauty
        </div>
        <div className="text-base pt-[19px] tracking-widest max-w-5xl mx-auto font-light text-[#8B8B8B]">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br className="hidden sm:inline" /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-6">
        <Services />
      </div>
    </div>
  </div>
);

export default CoreServices;