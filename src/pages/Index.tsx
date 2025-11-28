import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ContentSection from "@/components/ContentSection";
import ConditionsSection from "@/components/ConditionsSection";
import AudienceSection from "@/components/AudienceSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhySection />
        <ContentSection />
        <ConditionsSection />
        <AudienceSection />
        <ObjectiveSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
