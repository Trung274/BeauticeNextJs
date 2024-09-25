import MainSlider from "./components/home1/MainSlider/MainSlider";
import CoreServices from "./components/home1/CoreServices/CoreServices";
import AboutUs from "./components/home1/AboutUs/AboutUs";
import ProfessionalTeams from "./components/home1/ProfessionalTeams/ProfessionalTeams";
import ContactUs from "./components/home1/ContactUs/Contactus";

export default function home1() {
  return (
    <main className="flex flex-col">
      <section className="w-full mx-auto px-4 py-16">
        <MainSlider />
      </section>
      <section className="w-full mx-auto px-4 py-16">
      <CoreServices />
      </section>
      <section className="w-full mx-auto px-4 py-16">
      </section>
      <AboutUs />
      <section className="w-full mx-auto px-4 py-16">
      </section>
      <ProfessionalTeams />
      <section className="w-full mx-auto px-4 py-16">
      </section>
      <ContactUs />
    </main>
  );
}