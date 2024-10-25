    import OurService from "../components/service/OurService/OurService";
import ServiceConsultation from "../components/service/ServiceConsultation/ServiceConsultation";
import ServiceTreatment from "../components/service/ServiceTreatment/ServiceTreatment";
import ServiceProducts from "../components/service/ServiceProducts/ServiceProducts";
import ServiceSlogan from "../components/service/ServiceSlogan/ServiceSlogan";
import FAQ from "../components/service/ServiceFAQ/ServiceFAQ";

// Import SVGs
import Bubble from '../../public/assets/Bubblebg.svg';

export default function service() {
    return (
        <>
        {/* Background SVGs */}
        < div className="absolute top-0 left-0 right-0 -z-10" >
            <img src={Bubble.src} alt="" className="w-auto h-auto absolute top-[200px] right-0" />
        </div >
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <OurService />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <ServiceConsultation />
            </section>
            <section className="w-full mx-auto px-4 -mt-4">
                <ServiceTreatment />
            </section>
            <section className="w-full mx-auto px-4 -mt-7">
                <ServiceProducts />
            </section>
            <section className="w-full mx-auto px-4 py-6">
                <ServiceSlogan />
            </section>
            <section className="w-full mx-auto px-4 py-12 xl:pb-[117px]">
                <FAQ />
            </section>
        </main>
        </>
    );
}