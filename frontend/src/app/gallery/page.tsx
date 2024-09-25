import OurGallery from "../components/gallery/OurGallery/OurGallery";
import VideoTour from "../components/gallery/VideoTour/VideoTour";
import Quota from "../components/gallery/Quota/Quota";

export default function service() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <OurGallery />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <VideoTour />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <Quota />
            </section>
        </main>
    );
}