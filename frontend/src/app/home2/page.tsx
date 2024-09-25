import MainSlider from "../components/home2/MainSlider/MainSlider";
import MainServices from "../components/home2/MainServices/MainServices";
import AboutUs from "../components/home2/AboutUs/AboutUs";
import Why from "../components/home2/Why/Why";
import TheBlog from "../components/home2/TheBlog/TheBlog";
import Request from "../components/home2/Request/Request";

export default function Home2() {
  return (
    <main className="flex flex-col">
      <section className="w-full">
        <MainSlider />
      </section>
      <section className="w-full max-w-7xl mx-auto py-20">
        <AboutUs />
      </section>
      <section className="w-full max-w-7xl mx-auto py-20">
        <MainServices />
      </section>
      <section className="w-full max-w-7xl mx-auto py-20">
        <Why />
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <TheBlog />
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <Request />
      </section>
    </main>
  );
}