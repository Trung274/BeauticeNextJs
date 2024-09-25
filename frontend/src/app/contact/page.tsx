import Contact from "../components/contact/Form/Contact";
import Map from "../components/contact/Map/Map";
import Info from "../components/contact/Info/Info";

export default function service() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <Contact />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <Map/>
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <Info />
            </section>
        </main>
    );
}