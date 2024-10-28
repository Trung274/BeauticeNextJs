import Contact from "../components/contact/Form/Contact";
import Map from "../components/contact/Map/Map";
import Info from "../components/contact/Info/Info";

// Import SVGs
import Bubble from '../../public/assets/ContactBubble.svg';

export default function service() {
    return (
        <>
            {/* Background SVGs */}
            < div className="absolute top-0 left-0 right-0 -z-10" >
                <img src={Bubble.src} alt="" className="w-auto h-auto absolute top-[313px] right-0" />
            </div >

            {/* Main content */}
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <Contact />
            </section>
            <section className="w-full mx-auto px-4">
                <Map/>
            </section>
            <section className="w-full mx-auto px-4 pt-24 pb-20">
                <Info />
            </section>
        </main>
        </>
    );
}