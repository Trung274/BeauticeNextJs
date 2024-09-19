import MainSlider from "./components/home1/MainSlider/MainSlider";
import CoreServices from "./components/home1/CoreServices/CoreServices";
import AboutUs from "./components/home1/AboutUs/AboutUs";
import ProfessionalTeams from "./components/home1/ProfessionalTeams/ProfessionalTeams";
import ContactUs from "./components/home1/ContactUs/Contactus";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <CoreServices />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </main>
  );
}