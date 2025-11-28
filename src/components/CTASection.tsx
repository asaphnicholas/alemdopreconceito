import { Button } from "@/components/ui/button";
import { Play, Share2, Heart, Leaf } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heart Icon */}
          <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-secondary/30">
            <Heart className="w-10 h-10 text-secondary" fill="currentColor" />
          </div>

          {/* Main CTA Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            Junte-se a esse{" "}
            <span className="text-gradient">movimento</span>
          </h2>

          {/* Persuasive Text */}
          <div className="space-y-4 mb-10">
            <p className="text-xl text-primary-foreground/90 font-medium">
              Não feche os olhos para a ciência.
            </p>
            <p className="text-xl text-primary-foreground/90 font-medium">
              Não ignore quem precisa de tratamento.
            </p>
            <p className="text-xl text-primary-foreground/90 font-medium">
              Não aceite o preconceito como verdade.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-pulse-glow" asChild>
              <a href="#video">
                <Play className="h-5 w-5" />
                Assistir Agora
              </a>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Share2 className="h-5 w-5" />
              Compartilhar
            </Button>
          </div>

          {/* Final Message */}
          <p className="text-lg text-primary-foreground/70 mb-6">
            Assista, compartilhe e faça parte da mudança.
          </p>
          <p className="text-secondary font-semibold text-xl">
            Conheça a realidade além do preconceito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
