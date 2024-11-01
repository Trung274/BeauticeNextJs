import MainSlider from "@/components/home2/MainSlider/MainSlider";
import MainServices from "../../components/home2/MainServices/MainServices";
import AboutUs from "@/components/home2/AboutUs/AboutUs";
import Why from "@/components/home2/Why/Why";
import TheBlog from "@/components/home2/TheBlog/TheBlog";
import Request from "@/components/home2/Request/Request";

// Import SVGs
import WaveLine0 from '../../public/assets/WaveLine0.svg';
import WaveLine from '../../public/assets/WaveLine.svg';
import BGElements from '../../public/assets/BG-Elements.svg';

export default function Home2() {
  return (
    <>
      {/* Background SVGs */}
      < div className="absolute top-0 left-0 right-0 -z-10" >
        <img src={WaveLine0.src} alt="" className="w-auto h-auto absolute top-[1927px] left-0" />
        <img src={WaveLine.src} alt="" className="w-auto h-auto absolute top-[2886px] right-0" />
        <img src={BGElements.src} alt="" className="w-auto h-auto absolute top-[3817px] left-0" />
      </div >

      {/* Main content */}
      < main className="flex flex-col" >
        <section className="w-full max-w-7xl mx-auto py-20">
          <MainSlider />
        </section>
        <section className="w-full max-w-7xl mx-auto py-20 pt-[390px]">
          <AboutUs />
        </section>
        <section className="w-full max-w-7xl mx-auto py-16">
          <MainServices />
        </section>
        <section className="w-full max-w-7xl mx-auto py-16">
          <Why />
        </section>
        <section className="w-full max-w-7xl mx-auto pt-[62px] pb-24">
          <TheBlog />
        </section>
        <section className="w-full max-w-7xl mx-auto py-16 pb-[167px]">
          <Request />
        </section>
      </main >
    </>
  );
}
