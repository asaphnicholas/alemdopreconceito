import { Button } from "@/components/ui/button";
import { Play, Leaf, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Leaf Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20">
          <Leaf className="w-32 h-32 text-primary-foreground rotate-45" />
        </div>
        <div className="absolute bottom-40 right-20">
          <Leaf className="w-24 h-24 text-primary-foreground -rotate-12" />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Leaf className="w-16 h-16 text-primary-foreground rotate-90" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-secondary/30">
              <Leaf className="w-4 h-4" />
              Documentário • Santa Catarina
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-[1.1] animate-fade-up delay-100">
            Além do{" "}
            <span className="text-gradient">Preconceito</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium animate-fade-up delay-200">
            Um recorte sobre a Cannabis Medicinal em Santa Catarina
          </p>

          {/* Tagline */}
          <div className="animate-fade-up delay-300">
            <p className="text-lg md:text-xl text-secondary font-semibold mb-8 flex items-center justify-center gap-2">
              <Leaf className="w-5 h-5" />
              Chegou a hora de enxergar a Cannabis com ciência, empatia e verdade
            </p>
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto mb-10 animate-fade-up delay-400">
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Quantas vidas poderiam ser transformadas se o preconceito desse lugar à informação?
            </p>
            <p className="text-primary-foreground/70 leading-relaxed">
              "Além do Preconceito" é um documentário impactante que revela a realidade por trás da cannabis medicinal 
              em Santa Catarina, mostrando como a ciência, a pesquisa e o acesso responsável estão mudando a vida de 
              milhares de pacientes que antes viviam reféns da dor, de crises constantes e de tratamentos ineficazes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-500">
            <Button variant="hero" size="xl" className="animate-pulse-glow" asChild>
              <a href="#video">
                <Play className="h-5 w-5" />
                Assistir ao Documentário
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#porque">
                Saiba Mais
              </a>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="video" className="max-w-5xl mx-auto animate-scale-in delay-500">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-lg">
              <Play className="w-5 h-5" />
              Assista ao vídeo de apresentação
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-primary-foreground/10">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none z-10 opacity-30" />
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

          <p className="text-center text-primary-foreground/60 mt-6 text-sm max-w-2xl mx-auto">
            Uma narrativa forte, humana e esclarecedora que conecta ciência, pacientes e especialistas 
            em um só propósito: <strong className="text-secondary">informar para transformar</strong>.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#porque" className="text-primary-foreground/50 hover:text-secondary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
