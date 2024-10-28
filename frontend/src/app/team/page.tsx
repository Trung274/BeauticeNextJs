import OurTeams from "../components/team/OurTeams/ProfessionalTeams";
import AssistanceTeam from "../components/team/AssistantTeam/AssistantTeam";
import TeamSlogan from "../components/team/TeamSlogan/TeamSlogan";
import Testimonials from "../components/team/Testimonials/Testimonials";

// Import SVGs
import Bubble from '../../public/assets/Bubblebg5.svg';
import ElementBackground from '../../public/assets/ElementBackground.svg'

export default function team() {
    return (
        <>

        {/* Background SVGs */}
        < div className="absolute top-0 left-0 right-0 -z-10" >
            <img src={Bubble.src} alt="" className="w-auto h-auto absolute top-[229px] right-0" />
            <img src={ElementBackground.src} alt="" className="w-auto h-auto absolute top-[3042px] " />
        </div >

        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-5">
                <OurTeams />
            </section>
            <section className="w-full mx-auto px-4 pt-32">
                <AssistanceTeam />
            </section>
            <section className="w-full mx-auto px-4 pt-28">
                <TeamSlogan />
            </section>
            <section className="w-full mx-auto px-4 pt-12 pb-9">
                <Testimonials />
            </section>
        </main>
        </>
    );
}