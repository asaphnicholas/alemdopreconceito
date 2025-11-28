import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-secondary" />
            <span className="font-bold text-background">Além do Preconceito</span>
          </div>
          
          <p className="text-background/60 text-sm text-center">
            Cannabis Medicinal em Santa Catarina • Documentário
          </p>

          <p className="text-background/40 text-xs">
            © 2024 Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
