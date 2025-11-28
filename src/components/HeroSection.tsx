import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            Documentário • Santa Catarina
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Além do{" "}
            <span className="text-gradient">Preconceito</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Um recorte sobre a Cannabis medicinal em Santa Catarina. 
            Ciência, esperança e a transformação de vidas através do uso responsável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="#video">
                <Play className="h-5 w-5" />
                Assistir Documentário
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sobre">
                Saiba Mais
              </a>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="video" className="max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dVIRtVrZ8d4"
                title="Além do Preconceito - Cannabis Medicinal em SC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-pulse-soft">
          <a href="#sobre" className="text-primary-foreground/60 hover:text-secondary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
