import About from "../components/about/About";
import ProfessionalTeams from "../components/home1/ProfessionalTeams/ProfessionalTeams";
import Vision from "../components/about/Vision";
import Mission from "../components/about/Mission";
import Clients from "../components/about/Clients";
import Slogan from "../components/about/Slogan";

// Import SVGs
import Bubble1 from '../../public/assets/Bubble1.svg';
import Bubble2 from '../../public/assets/Bubble2.svg';

export default function about() {
    return (
        <>
            {/* Background SVGs */}
            < div className="absolute top-0 left-0 right-0 -z-10" >
                <img src={Bubble1.src} alt="" className="w-auto h-auto absolute top-[637px] right-0" />
                <img src={Bubble2.src} alt="" className="w-auto h-auto absolute top-[2886px] left-0" />
            </div >

            {/* Main content */}
            <main className="flex flex-col">
                <section className="w-full max-w-7xl mx-auto py-16">
                    <About />
                </section>
                <section className="w-full max-w-7xl -mt-[107px]">
                    <ProfessionalTeams />
                </section>
                <section className="w-full max-w-7xl mx-auto py-36">
                    <Slogan />
                </section>
                <section className="w-full max-w-7xl mx-auto py-16 -mt-24">
                    <Vision />
                </section>
                <section className="w-full max-w-7xl mx-auto py-16">
                    <Mission />
                </section>
                <section className="w-full max-w-7xl mx-auto py-16 -mt-20 mb-9">
                    <Clients />
                </section>
            </main>
        </>
    );
}