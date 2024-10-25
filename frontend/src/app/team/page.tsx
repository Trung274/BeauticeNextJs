import OurTeams from "../components/team/OurTeams/ProfessionalTeams";
import AssistanceTeam from "../components/team/AssistantTeam/AssistantTeam";
import TeamSlogan from "../components/team/TeamSlogan/TeamSlogan";
import Testimonials from "../components/team/Testimonials/Testimonials";

export default function team() {
    return (
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
    );
}