import MainSlider from "./components/home1/MainSlider/MainSlider";
import CoreServices from "./components/home1/CoreServices/CoreServices";
import AboutUs from "./components/home1/AboutUs/AboutUs";
import ProfessionalTeams from "./components/home1/ProfessionalTeams/ProfessionalTeams";
import ContactUs from "./components/home1/ContactUs/Contactus";

// Import SVGs
import SlideBackground from '../public/assets/SlideBackground.svg';
import BackgroundBubble from '../public/assets/BackgroundBubble.svg';
import BackgroundBubble2 from '../public/assets/BackgroundBubble2.svg';

export default function home1() {
  return (
    <>
      {/* Background SVGs */}
      <div className="absolute top-0 left-0 right-0 -z-10 overflow-hidden">
        <img 
          src={SlideBackground.src} 
          alt="" 
          className="w-full h-auto object-cover lg:object-contain lg:w-auto lg:max-w-none" 
        />
        <img 
          src={BackgroundBubble.src} 
          alt="" 
          className="w-1/2 h-auto absolute top-[50%] right-0 lg:w-auto lg:top-[1446px]" 
        />
        <img 
          src={BackgroundBubble2.src} 
          alt="" 
          className="w-1/2 h-auto absolute top-[75%] left-0 lg:w-auto lg:top-[3143px]" 
        />
      </div>

      {/* Main content */}
      <main className="relative flex flex-col">
        <section className="w-full mx-auto px-4 py-8 md:py-16 lg:py-24">
          <MainSlider />
        </section>

        <section className="w-full mx-auto px-4 pt-4 md:pt-6 lg:pt-8">
          <CoreServices />
        </section>

        <section className="w-full mx-auto px-4 pt-4 md:pt-6 lg:pt-8">
          <AboutUs />
        </section>

        <section className="w-full mx-auto px-4 mt-0 md:-mt-1">
          <ProfessionalTeams />
        </section>
        
        <section className="w-full mx-auto px-4 pt-16 md:pt-24 lg:pt-36 pb-1">
          <ContactUs />
        </section>
      </main>
    </>
  );
}