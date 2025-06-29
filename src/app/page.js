import Navbar from "./sections/Navbar";
import Hero from "./sections/HeroSection";
import { Suspense } from "react";
import Loading from "./sections/components/Loading";
import AboutSection from "./sections/components/About";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <AboutSection />
    </div>
  );
}
