import About from "../components/about/About";
import ProfessionalTeams from "../components/home1/ProfessionalTeams/ProfessionalTeams";
import Vision from "../components/about/Vision";
import Mission from "../components/about/Mission";
import Clients from "../components/about/Clients";
import Slogan from "../components/about/Slogan";

export default function about() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-14">
                <About />
            </section>
            <section className="w-full mx-auto px-4 py-14">
                <ProfessionalTeams />
            </section>
            <section className="w-full mx-auto px-4 py-14">
                <Slogan />
            </section>
            <section className="w-full mx-auto px-4 py-14">
                <Vision />
            </section>
            <section className="w-full mx-auto px-4 py-14">
                <Mission />
            </section>
            <section className="w-full mx-auto px-4 py-14">
                <Clients />
            </section>
        </main>
    );
}