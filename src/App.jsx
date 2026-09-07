import { useEffect, useLayoutEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCta from "./components/ProductCta";
import ProcessSteps from "./components/ProcessSteps";
import FeatureCards from "./components/FeatureCards";
import HeroSection from "./components/HeroSection";
import MaintenancePage from "./components/MaintenancePage";
import Reveal from "./components/Reveal";
import AdvantagesSection from "./components/AdvantagesSection";
import "./App.css";

const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";

function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <FeatureCards />
        </Reveal>
        <Reveal>
          <ProcessSteps />
        </Reveal>
        <Reveal>
          <AdvantagesSection />
        </Reveal>
      </main>
      <Reveal>
        <ProductCta />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}

function App() {
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return <LandingPage />;
}

export default App;
