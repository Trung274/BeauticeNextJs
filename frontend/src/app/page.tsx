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
      <div className="absolute top-0 left-0 right-0 -z-10">
        <img src={SlideBackground.src} alt="" className="w-auto h-auto max-w-none" />
        <img src={BackgroundBubble.src} alt="" className="w-auto h-auto absolute top-[1446px] right-0" />
        <img src={BackgroundBubble2.src} alt="" className="w-auto h-auto absolute top-[3143px] left-0" />
      </div>

      {/* Main content */}
      <main className="relative flex flex-col">
        <section className="w-full mx-auto px-4 py-24">
          <MainSlider />
        </section>

        <section className="w-full mx-auto px-4 pt-8">
          <CoreServices />
        </section>

        <section className="w-full mx-auto px-4 pt-8">
          <AboutUs />
        </section>

        <section className="w-full mx-auto px-4 -mt-1">
          <ProfessionalTeams />
        </section>
        
        <section className="w-full mx-auto px-4 pt-36 pb-1">
          <ContactUs />
        </section>
      </main>
    </>
  );
}