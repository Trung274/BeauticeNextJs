import OurService from "../components/service/OurService/OurService";
import ServiceConsultation from "../components/service/ServiceConsultation/ServiceConsultation";
import ServiceTreatment from "../components/service/ServiceTreatment/ServiceTreatment";
import ServiceProducts from "../components/service/ServiceProducts/ServiceProducts";
import ServiceSlogan from "../components/service/ServiceSlogan/ServiceSlogan";
import FAQ from "../components/service/ServiceFAQ/ServiceFAQ";

export default function service() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <OurService />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <ServiceConsultation />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <ServiceTreatment />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <ServiceProducts />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <ServiceSlogan />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <FAQ />
            </section>
        </main>
    );
}