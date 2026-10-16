import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import WhatsAppFloat from "./components/BackToTop";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import MenuSection from "./components/MenuSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyChooseUs />
        <VisionMission />
        <MenuSection />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
