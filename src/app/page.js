import Navbar from "./sections/Navbar";
import Hero from "./sections/HeroSection";
import { Suspense } from "react";
import Loading from "./sections/components/Loading";
import AboutSection from "./sections/components/About";
import ServicesSection from "./sections/components/Services";
import CTASection from "./sections/components/Cta";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <AboutSection />
      <ServicesSection />
      <CTASection />
      {/* Add more sections as needed */}
    </div>
  );
}
