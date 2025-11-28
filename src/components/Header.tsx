import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">Além do Preconceito</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Sobre
          </a>
          <a href="#objetivos" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Objetivos
          </a>
          <a href="#pesquisa" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Pesquisa
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
