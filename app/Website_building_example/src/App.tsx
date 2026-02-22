import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="grain-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <InsightsSection />
      <Footer />
    </div>
  );
}
