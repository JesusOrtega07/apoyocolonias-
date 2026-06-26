import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComoFunciona from "@/components/ComoFunciona";
import GaleriaResultados from "@/components/GaleriaResultados";
import PremiosCarrusel from "@/components/PremiosCarrusel";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ComoFunciona />
      <GaleriaResultados />
      <PremiosCarrusel />
      <Footer />
    </main>
  );
};

export default HomePage;
