import ProfessionalTeams from "../components/home1/ProfessionalTeams/ProfessionalTeams";
import AssistanceTeam from "../components/team/AssistantTeam/AssistantTeam";
import TeamSlogan from "../components/team/TeamSlogan/TeamSlogan";
import Testimonials from "../components/team/Testimonials/Testimonials";

export default function team() {
    return (
        <main className="flex flex-col">
            <section className="w-full mx-auto px-4 py-16">
                <ProfessionalTeams />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <AssistanceTeam />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <TeamSlogan />
            </section>
            <section className="w-full mx-auto px-4 py-16">
                <Testimonials />
            </section>
        </main>
    );
}