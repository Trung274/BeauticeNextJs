import OurGallery from "../../components/gallery/OurGallery/OurGallery";
import VideoTour from "../../components/gallery/VideoTour/VideoTour";
import Quota from "@/components/gallery/Quota/Quota";

// Import SVGs
import Bubble from '../../public/assets/Backgroundbubble4.svg';

export default function service() {
    return (
        <>
        {/* Background SVGs */}
        < div className="absolute top-0 left-0 right-0 -z-10 hidden xl:block" >
            <img src={Bubble.src} alt="" className="w-auto h-auto absolute top-[2039px] right-0" />
        </div >
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <OurGallery />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <VideoTour />
            </section>
            <section className="w-full mx-auto px-4 mb-24">
                <Quota />
            </section>
        </main>
        </>
    );
}