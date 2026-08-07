import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import WhoItsFor from "@/app/components/WhoItsFor";
import Courses from "@/app/components/Courses";
import About from "@/app/components/About";
import Partners from "@/app/components/Partners";
import AdvertStrip from "@/app/components/AdvertStrip";
import HowItWorks from "@/app/components/HowItWorks";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhoItsFor />
        <Courses />
        <About />
        <Partners />
        <AdvertStrip />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
