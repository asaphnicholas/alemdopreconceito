import { Leaf, Heart, Lightbulb, FlaskConical } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--background)) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-secondary-foreground" />
            </div>
            <span className="text-2xl font-bold text-background">Além do Preconceito</span>
          </div>

          {/* Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-background/70">
              <Heart className="w-5 h-5 text-secondary" />
              <span className="font-medium">Informação cura</span>
            </div>
            <div className="w-1 h-1 bg-background/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2 text-background/70">
              <Lightbulb className="w-5 h-5 text-secondary" />
              <span className="font-medium">Empatia transforma</span>
            </div>
            <div className="w-1 h-1 bg-background/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2 text-background/70">
              <FlaskConical className="w-5 h-5 text-secondary" />
              <span className="font-medium">Ciência liberta</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-background/10 mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © 2024 Além do Preconceito. Todos os direitos reservados.
            </p>
            <p className="text-background/50 text-sm">
              Cannabis Medicinal em Santa Catarina • Documentário
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
