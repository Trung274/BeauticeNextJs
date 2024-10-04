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

// This is hardcode 
// import React from 'react';
// import Image from 'next/image';
// import Animation1 from '@/public/assets/Animation1.svg';
// import Animation2 from '@/public/assets/Animation2.svg';
// import Animation3 from '@/public/assets/Animation3.svg';

// const CoreServices: React.FC = () => {
//   return (
//     <section className="py-16 pt-[2px]">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col justify-center gap-y-6 text-center">
//           <div className="flex flex-col gap-y-3">
//             <div className="text-base font-semibold text-[#ff64ae]">Main Services</div>
//             <div className="text-4xl text-[#091156] font-semibold leading-tight">
//               Learn services to focus <br />
//               on your beauty
//             </div>
//             <div className="text-base tracking-widest max-w-5xl mx-auto font-light text-[#8b8b8b] mt-1">
//               Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br className="hidden sm:inline" /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center gap-8 p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-14">
              
//               {/* Service Card 1 */}
//               <div className="bg-white rounded-3xl overflow-hidden -ml-[19px] shadow-lg p-6 w-[343px] h-[440px]">
//                 <div className="flex flex-col pt-5 items-center text-center h-full">
//                   <Image src={Animation1} alt="Service 1" width={160} height={160} className="mb-6" />
//                   <h3 className="text-[#091156] text-[18px] font-bold tracking-tight mt-[35px] mb-3">
//                     Beauty consultation
//                   </h3>
//                   <p className="text-[#8b8b8b] tracking-widest text-sm mt-2 px-4">
//                     Non parturient amet, feugiat <br /> tellus sagittis, scelerisque eget <br />
//                     nulla turpis.
//                   </p>
//                 </div>
//               </div>

//               {/* Service Card 2 */}
//               <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-6 w-[343px] h-[440px]">
//                 <div className="flex flex-col pt-5 items-center text-center h-full">
//                   <Image src={Animation2} alt="Service 2" width={160} height={160} className="mb-6" />
//                   <h3 className="text-[#091156] text-[18px] font-bold tracking-normal mt-[35px] mb-3">
//                     Skin treatments
//                   </h3>
//                   <p className="text-[#8b8b8b] tracking-widest text-sm mt-2 px-4">
//                     Non parturient amet, feugiat <br /> tellus sagittis, scelerisque eget <br />
//                     nulla turpis.
//                   </p>
//                 </div>
//               </div>

//               {/* Service Card 3 */}
//               <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-6 w-[343px] h-[440px]">
//                 <div className="flex flex-col pt-5 items-center text-center h-full">
//                   <Image src={Animation3} alt="Service 3" width={160} height={160} className="mb-6" />
//                   <h3 className="text-[#091156] text-[18px] font-bold tracking-normal mt-[35px] mb-3">
//                     Beauty product
//                   </h3>
//                   <p className="text-[#8b8b8b] tracking-widest text-sm mt-2 px-4">
//                     Non parturient amet, feugiat <br /> tellus sagittis, scelerisque eget <br />
//                     nulla turpis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreServices;